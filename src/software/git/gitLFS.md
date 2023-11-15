---
date: 2020-05-04
icon: Github
category: Git
order:
tag:
  - Git
  - 软件
---

# Git Large File Storage

Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.

## Getting Started

1. Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:

   ```sh
   git lfs install
   ```

   You’ll need to run this in your repository directory, once per repository.

1. Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.

   ```sh
   git lfs track "*.psd"
   ```

   Make sure to track `.gitattributes`

   ```sh
   git add .gitattributes
   ```
