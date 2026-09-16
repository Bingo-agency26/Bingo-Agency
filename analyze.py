import csv
import json

articles = []
with open('articles.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Check credibility heuristically: e.g. status Done, intent Commercial/Informational
        if row.get('Status') == 'Done':
            articles.append({
                'title': row.get('Article_Title'),
                'keyword': row.get('Keyword'),
                'volume': row.get('Search_Volume'),
                'intent': row.get('Intent')
            })

# Sort by volume (descending) assuming higher volume is better for initial traffic (if credible)
articles.sort(key=lambda x: int(x['volume']) if x['volume'].isdigit() else 0, reverse=True)

# Save the top 20 to a JSON file to inspect
with open('top_articles.json', 'w', encoding='utf-8') as f:
    json.dump(articles[:20], f, indent=2, ensure_ascii=False)

print(f"Total processed: {len(articles)}")

