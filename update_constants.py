import re

# Read the newly generated constants content (the array only)
with open('constants.ts', 'r', encoding='utf-8') as f:
    original_constants = f.read()

# We already generated the string for BLOG_POSTS in the previous run.
# I'll just regenerate it and inject it correctly this time.
import csv
import datetime

unsplash_images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"
]

articles = []
seen_keywords = set()

with open('articles.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        kw = row.get('Keyword', '').strip().lower()
        title = row.get('Article_Title', '').strip()
        content = row.get('Article_Content', '').strip()
        excerpt = row.get('Meta_Description', '').strip()
        
        if row.get('Status') == 'Done' and title and content and kw not in seen_keywords:
            seen_keywords.add(kw)
            
            if content.startswith('```html'):
                content = content.replace('```html', '')
                content = content.replace('```', '')
            
            word_count = len(content.split())
            read_time = str(max(1, word_count // 200)) + " min"
            
            articles.append({
                'id': len(articles) + 1,
                'title': title,
                'category': 'SEO' if 'seo' in kw else ('Web Design' if 'creation' in kw or 'site' in kw else 'Marketing'),
                'image': unsplash_images[len(articles) % len(unsplash_images)],
                'date': (datetime.datetime.now() - datetime.timedelta(days=len(articles))).isoformat(),
                'readTime': read_time,
                'excerpt': excerpt[:160] + ('...' if len(excerpt) > 160 else ''),
                'content': content,
                'volume': int(row.get('Search_Volume', 0)) if row.get('Search_Volume', '').isdigit() else 0
            })

articles.sort(key=lambda x: x['volume'], reverse=True)
top_10 = articles[:10]

new_blog_posts = "export const BLOG_POSTS = [\n"
for a in top_10:
    title_safe = a['title'].replace("'", "\\'").replace('"', '\\"')
    excerpt_safe = a['excerpt'].replace("'", "\\'").replace('"', '\\"')
    content_safe = a['content'].replace('`', '\\`').replace('$', '\\$')
    
    new_blog_posts += f"""  {{
    id: {a['id']},
    title: '{title_safe}',
    category: '{a['category']}',
    image: '{a['image']}',
    date: '{a['date']}',
    readTime: '{a['readTime']}',
    excerpt: '{excerpt_safe}',
    content: `{content_safe}`
  }},\n"""

new_blog_posts += "];"

# Replace the existing BLOG_POSTS block in original_constants using regex
# We need to find everything from "export const BLOG_POSTS =" up to the matching "];"
pattern = re.compile(r"export const BLOG_POSTS = \[.*?\];", re.DOTALL)
updated_constants = pattern.sub(new_blog_posts, original_constants)

with open('constants.ts', 'w', encoding='utf-8') as f:
    f.write(updated_constants)

print("Updated constants.ts without breaking other exports!")

