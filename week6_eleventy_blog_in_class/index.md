---
title: Home
layout: base.njk
bodyClass: home
---


<header class="hero">
			<h1 class="hero-title">matter of intelligence
				<span class="hero-images" aria-hidden="true">
					<img class="hero-thumb visible" src="/images/typography_questionmark.jpeg" alt="">
					<img class="hero-thumb" src="/images/typography_questionmark - Copy.jpeg" alt="">
					<img class="hero-thumb" src="/images/typography_questionmark - Copy (3).jpeg" alt="">
					<img class="hero-thumb" src="/images/title_image.png" alt="">
					<img class="hero-thumb" src="/images/title2_image.png" alt="">
					<img class="hero-thumb" src="/images/title3_image.png" alt="">
				</span>
			</h1>
	<p class="hero-sub">A small journalism-style collection</p>
</header>

<div class="filter-bar">
	<label for="tag-filter">Filter:</label>
	<select id="tag-filter">
		<option value="all">All</option>
		<option value="reflection">Reflection</option>
		<option value="review">Review</option>
		<option value="journal">Journal</option>
	</select>
</div>



<section>
	<h2>Latest | Faye Young</h2>
	<ul class="posts">
	{% for post in collections.post | reverse | slice: 1,100 %}
		{% assign excerpt = post.templateContent | strip_html | strip %}
		{% if post.data.title or excerpt != "" %}
		<li class="post-item" data-tags="{{ post.data.tags | join: ',' }}">
			<a class="post-card" href="{{ post.url }}">
				{% if post.data.image %}
					<img src="{{ post.data.image }}" alt="{{ post.data.title }} image">
				{% endif %}
				<h3>{{ post.data.title }}</h3>
				<p class="meta">{{ post.date }}</p>
				<p class="excerpt">{{ post.templateContent | strip_html | truncate: 140 }}</p>
			</a>
		</li>
		{% endif %}
	{% endfor %}
	</ul>
</section>

<script src="/scripts/filter.js"></script>
