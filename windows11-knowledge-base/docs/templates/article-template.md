# ${ARTICLE_TITLE}

```yaml
summary: "${ARTICLE_SUMMARY}"
difficulty: "beginner|intermediate|advanced"
last_updated: "${LAST_UPDATED}"
contributors:
  - name: ${AUTHOR_NAME}
    role: ${AUTHOR_ROLE}
```

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/${CATEGORY_SLUG}">${CATEGORY_NAME}</a></li>
    <li class="breadcrumb-item active" aria-current="page">${ARTICLE_TITLE}</li>
  </ol>
</nav>

<div class="article-metadata">
  <span class="last-updated">Last updated: ${LAST_UPDATED}</span>
  <span class="difficulty-badge difficulty-${DIFFICULTY_LEVEL}">
    ${DIFFICULTY_LEVEL}
  </span>
</div>

## Overview

${ARTICLE_OVERVIEW}

## Table of Contents

[TOC]

## Prerequisites

!!! note "Before You Begin"
    Before starting this guide, make sure you have:
    
    - [ ] ${PREREQUISITE_1}
    - [ ] ${PREREQUISITE_2}
    - [ ] ${PREREQUISITE_3}

## Step 1: ${STEP_TITLE}

${STEP_DESCRIPTION}

```${CODE_BLOCK_LANGUAGE}
${CODE_SNIPPET}
```

!!! tip "Pro Tip"
    ${USEFUL_TIP}

## Step 2: ${STEP_TITLE}

${STEP_DESCRIPTION}

<figure class="screenshot">
  <img src="/images/${SCREENSHOT_FILENAME}.png" alt="${SCREENSHOT_ALT_TEXT}">
  <figcaption>${SCREENSHOT_CAPTION}</figcaption>
</figure>

!!! warning "Important"
    ${IMPORTANT_NOTE}

## Step 3: ${STEP_TITLE}

${STEP_DESCRIPTION}

1. ${SUB_STEP_1}
2. ${SUB_STEP_2}
3. ${SUB_STEP_3}

## Troubleshooting

<details>
<summary>Common Issues</summary>

### Issue: ${ISSUE_TITLE}
**Solution:** ${SOLUTION}

### Issue: ${ISSUE_TITLE}
**Solution:** ${SOLUTION}

</details>

## Next Steps

- [Related Article 1](${RELATED_ARTICLE_1_URL})
- [Related Article 2](${RELATED_ARTICLE_2_URL})
- [Back to ${CATEGORY_NAME}](/category-slug/)

## Additional Resources

- [${RESOURCE_TITLE}](${RESOURCE_URL})
- [${RESOURCE_TITLE}](${RESOURCE_URL})

## Need Help?

If you're still having trouble, you can:

1. [Ask the Community](#)
2. [Report an Issue](https://github.com/your-repo/issues)
3. [Contact Support](#)

## Was this helpful?

<div class="feedback-buttons">
  <button class="button button--success feedback-yes">
    <svg viewBox="0 0 24 24" width="16" height="16" style="margin-right: 4px;">
      <path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </svg>
    Yes
  </button>
  <button class="button button--danger feedback-no">
    <svg viewBox="0 0 24 24" width="16" height="16" style="margin-right: 4px;">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
    No
  </button>
</div>
