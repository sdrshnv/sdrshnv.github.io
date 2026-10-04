---
layout: default
title: Clothing Reviews
permalink: /clothing/
---

## Clothing Reviews

{% assign reviews = site.reviews | sort: 'date' | reverse %}
{% for review in reviews %}
### [{{ review.title }}]({{ review.url | relative_url }})

{% if review.summary %}{{ review.summary }}{% endif %}
{% else %}
No reviews yet.
{% endfor %}
