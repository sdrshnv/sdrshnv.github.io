---
published: false
layout: clothing
title: Clothing
permalink: /clothing/
description: Clothing I've worn and reviewed.
---

<h1 class="page-title">Clothing</h1>
<p class="lede">Notes on clothing I've worn and reviewed.</p>

<ol class="review-list">
{% assign reviews = site.reviews | sort: 'date' | reverse %}
{% for review in reviews %}
  <li>
    <a href="{{ review.url | relative_url }}">{{ review.title }}</a>
    <span class="meta">{{ review.brand }}</span>
  </li>
{% endfor %}
</ol>
