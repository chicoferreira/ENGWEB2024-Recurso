import json
import ast


def convert_string_array_to_list(string):
    return ast.literal_eval(string)


with open("dataset.json", encoding="utf-8") as f:
    data = json.load(f)
    for livro in data:
        livro["genres"] = convert_string_array_to_list(livro["genres"])
        livro["characters"] = convert_string_array_to_list(livro["characters"])
        livro["awards"] = convert_string_array_to_list(livro["awards"])
        livro["ratingsByStars"] = convert_string_array_to_list(livro["ratingsByStars"])
        livro["setting"] = convert_string_array_to_list(livro["setting"])
        livro["author"] = livro["author"].split(",")


with open("dataset-novo.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
