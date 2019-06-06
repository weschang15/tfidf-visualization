# TF-IDF Visualization

A small portfolio piece to demonstrate–on a professional level–familiarity and knowledge of Python, SQL, data manipulation and text analysis. On a personal level, this project will help improve our ability to think like an engineer, break our mission into small tasks as to not get overwhelmed or gain tunnel vision, and it will help solidify what we already know about Python, SQL, etc.

To begin, we need to understand what we want to accomplish.

## Objective

We want to determine the most common word(s) that occur in a dataset. This can be any type of data, song lyrics, blog posts, even movie scripts. Identifying common words will hopefully help us identify a pattern that appears in certain genres or categories of content.

## How

To do this we will use an algorithm called **TF-IDF**–_Term Fequency, Inverse Document Fequency._ TF-IDF will count the number of times a word (specified or otherwise) occurs in a given piece of content. In addition, it will also measure a terms importance by offsetting its frequency by the amount of times it occurs in an entire corpus of content. **These two pieces of the algorithm equate to keyword importance.**

### Why use TF-IDF

Implementing this algorithm is the challenging part of this project. It'll force us to think more critically. To add, TF-IDF opens up a door into machine learning, page ranking, and recommendation engines. Without getting too far ahead of ourselves, we should break down this algorithm into pieces.

## Tasks

1. Create a python script that will loop through a corpus of content and count the number of times each word occurs within each document.

## Pseudo-code examples

**Task 1 pseudo-code**

```python
# Given a set of data with 2 columns, title and summary, we want to:
# Step 1: Loop through ALL rows of data
# Step 2: Within the loop, for the current row, we want to
# Step 3: Split the summary into individual words, rather than just a long string of text
# Step 4: Count the number of times each individual word occurs

# Things to think about...
# For step 3, why do we want to split the summary into words
# For step 4, how should we keep track of all words and their associated frequency
```
