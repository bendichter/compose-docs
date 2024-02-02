"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[7929],{7330:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/1/31/new-year","metadata":{"permalink":"/compose-docs/blog/2024/1/31/new-year","editUrl":"https://github.com/neurostuff/compose-docs/edit/master/blog/2024-1-31-new-year.md","source":"@site/blog/2024-1-31-new-year.md","title":"New Year Updates","description":"Hello Neurosynth Users,","date":"2024-01-31T00:00:00.000Z","formattedDate":"January 31, 2024","tags":[{"label":"neurosynth","permalink":"/compose-docs/blog/tags/neurosynth"}],"readingTime":1.985,"hasTruncateMarker":false,"authors":[{"name":"Alejandro de la Vega","title":"Research Scientist","url":"https://github.com/adelavega","imageURL":"https://github.com/adelavega.png","key":"alejandro"}],"frontMatter":{"title":"New Year Updates","authors":"alejandro","tags":["neurosynth"]},"nextItem":{"title":"New tutorials and updates","permalink":"/compose-docs/blog/tutorials-updates"}},"content":"Hello Neurosynth Users,\\n\\n2023 was a very exciting year for Neurosynth, having launched our Compose platform to the public and announced it on social media. In the December we\u2019ve saw **over 500 new user visits**, with **200 users signing up for an account**! \ud83d\ude80\\n\\nHelp us keep this growth going by [sharing our announcement](./blog/announcing-ns-compose) with your colleagues. \ud83e\uddd1\u200d\ud83d\udd2c\\n\\n# \ud83c\udf1f What\u2019s New \ud83c\udf1f\\n\\nWe\u2019ve also continued to introduce new features and improve the user experience. Here\u2019s some highlights:\\n\\n### Large-scale association tests\\n\\nA key feature that set Neurosynth aside were large-scale association maps (previously known as \u201creverse inference\u201d).\\n\\nWhereas a typical meta-analysis tells you if activity is consistently reported in a target set of studies, an association test tells you if **activation occurs more consistently in this set of studies versus a large and diverse reference sample**. \\n\\nThat\'s important, because this allows you to control for base rate differences between regions. Certain regions, such as the insula or lateral PFC for instance, play a very broad role in cognition, and hence are consistently activated for many different tasks and cognitive states. Using MKDA Chi-Squared, you can test if brain activity in a region (such as the insula) is specifically associated with the studies in your meta-analysis.\\n\\nPreviously association tests were available for the automatically generated maps on neurosynth.org. **Now you can perform large-scale association tests for your custom meta-analyses in Neurosynth Compose.**\\n\\nWe have created a full primer and tutorial on MKDA Chi-Squared, including an example from a recent meta-analysis on social processing. Check it out!\\n\\nimport Button from \'@mui/material/Button\';\\n\\n<Button variant=\\"contained\\" color=\\"primary\\" href=\'tutorial/advanced/mkda_association\'>\\n    MKDA Chi-Squared Tutorial \ud83e\uddd1\u200d\ud83c\udf93\\n</Button>\\n\\n### UX Enhancements \u2728\\n\\nBased on your valuable feedback, we\'ve made numerous bug fixes and improvements: \\n\\n* **Simplified Curation**: The review import page has been removed, and summary information is now added directly to the tag step.\\n\\n* **Searching UI**: We\'ve replaced the dropdown with a selection gallery, making it easier to choose your preferred search method, and we now auto-generate search import names. In addition, resolving duplicates is skipped if none are present. \\n\\n* **Improved Editing Workflow**: The editing interface has been improved, streamlining the extraction process. \\n\\n* **Various UX Improvements and Fixes**: We fixed many papercuts, especially in the *Extraction* phase.\\n\\n\\nWe hope you enjoy these changes.\\n\\nEmail us any [feedback](mailto:neurosynthorg@gmail.com), or ask a question on [NeuroStars](https://neurostars.org/tag/neurosynth-compose) if you have issues.\\n\\n\\nCheers,\\n\\nThe Neurosynth Team \ud83e\udde0"},{"id":"tutorials-updates","metadata":{"permalink":"/compose-docs/blog/tutorials-updates","editUrl":"https://github.com/neurostuff/compose-docs/edit/master/blog/2023-11-28-tutorials.md","source":"@site/blog/2023-11-28-tutorials.md","title":"New tutorials and updates","description":"Dear Neurosynth Community,","date":"2023-11-28T00:00:00.000Z","formattedDate":"November 28, 2023","tags":[{"label":"hello","permalink":"/compose-docs/blog/tags/hello"},{"label":"neurosynth","permalink":"/compose-docs/blog/tags/neurosynth"}],"readingTime":1.135,"hasTruncateMarker":false,"authors":[{"name":"Alejandro de la Vega","title":"Research Scientist","url":"https://github.com/adelavega","imageURL":"https://github.com/adelavega.png","key":"alejandro"}],"frontMatter":{"slug":"tutorials-updates","title":"New tutorials and updates","authors":"alejandro","tags":["hello","neurosynth"]},"prevItem":{"title":"New Year Updates","permalink":"/compose-docs/blog/2024/1/31/new-year"},"nextItem":{"title":"Announcing Neurosynth Compose!","permalink":"/compose-docs/blog/announcing-ns-compose"}},"content":"Dear Neurosynth Community,\\n\\nI\'m excited to announce important updates to *Neurosynth Compose*: A free and open platform for neuroimaging meta-analysis.\\n\\nFirst, we have added some easy to follow [tutorials](https://neurostuff.github.io/compose-docs/tutorial) to our documentation, making it easy to become familiar with our platform. \\n\\nThe tutorials cover two main uses cases we support: Manual and Automated Meta-analyses. Our platform make gold-standard *manual* meta-analyses much easier, by leveraging pre-extracted imaging data\\nand streamline user interfaces. Automated meta-analyses are ideal for generating exploratory results rapidly, enabling meta-analysis as part of routine scientific practice.  \\n\\nWe\'ve also made many small but important updates to our platform, including significant performance updates and improvements to the user interface. \\n*Neurosynth Compose* is now more intuitive and easier to use. Give it a try by following our [manual meta-analysis tutorial](https://neurostuff.github.io/compose-docs/tutorial/manual). \\n\\nWe also have some exciting new features in the pipeline that we\'ll release in early 2024 including:\\n* Image-based Meta-Analysis (IBMA). Soon, you will be able to use NeuroVault data as inputs for IBMA-- a more powerful and sensitive alternative to Coordinate Based Meta-Analysis.\\n* Advanced data extraction using Large Language Models (GPT). Early protypes to extract detailed information (such as participant demographics) from neuroimaging articles using LLMs\\nhave shown promise. We are working on incorporating these workflows into *Neurosynth Compose*, making it even easier to identify relevant studies for meta-analysis.\\n\\nWe look forward to your feedback!\\n\\n-Alejandro"},{"id":"announcing-ns-compose","metadata":{"permalink":"/compose-docs/blog/announcing-ns-compose","editUrl":"https://github.com/neurostuff/compose-docs/edit/master/blog/2023-08-13-announcing.md","source":"@site/blog/2023-08-13-announcing.md","title":"Announcing Neurosynth Compose!","description":"Dear Neurosynth Community,","date":"2023-08-13T00:00:00.000Z","formattedDate":"August 13, 2023","tags":[{"label":"hello","permalink":"/compose-docs/blog/tags/hello"},{"label":"neurosynth","permalink":"/compose-docs/blog/tags/neurosynth"}],"readingTime":2.415,"hasTruncateMarker":false,"authors":[{"name":"Alejandro de la Vega","title":"Research Scientist","url":"https://github.com/adelavega","imageURL":"https://github.com/adelavega.png","key":"alejandro"}],"frontMatter":{"slug":"announcing-ns-compose","title":"Announcing Neurosynth Compose!","authors":"alejandro","tags":["hello","neurosynth"]},"prevItem":{"title":"New tutorials and updates","permalink":"/compose-docs/blog/tutorials-updates"}},"content":"Dear Neurosynth Community,\\n\\nMy name is Alejandro, and I am the current project leader of the Neurosynth project.\\n\\nI am very excited to announce to you that the Neurosynth project lives on, and we are officially announcing the (beta) release of the latest member of the ecosystem: Neurosynth Compose.\\n\\n_Neurosynth Compose_ enables users to easily perform custom neuroimaging meta-analyses using a web-based platform, with no programming experience required. This project addresses one of the most commonly request features, which is the ability to customize large-scale meta-analyses using you own expert knowledge.\\n\\n_Neurosynth Compose_ is _free to use_ and helps users:\\n\\n- \ud83d\udd0e **Search** across over 20,000 studies in the Neurosynth database, or import from external databses such as PubMed.\\n- \ud83d\uddc3\ufe0f **Curate** your StudySet using systematic review tools conforming to the [PRISMA](https://www.prisma-statement.org/) guidelines.\\n- \ud83d\udcdd **Extract** coordinates and metadata for each study, leveraging thousands of pre-extracted studies to minimize effort.\\n- \ud83d\udcca **Analyze** by specifying a reproducible [NiMARE](https://readthedocs.org/projects/nimare/) workflow, and execute it locally or in the cloud.\\n- \ud83d\udd17 **Share** with the community with complete provenance and reproducibility.\\n\\nThe goal of *Neurosynth Compose* is to enable researchers to go beyond the finite set of automatically generated meta-analyses from the original platform and overcome limitations from automated coordinate and semantic extraction. The end result is a gold standard meta-analysis, in much less time than a manual workflow, and with much greater reproducible. \\n\\nCurrently, *Neurosynth Compose* is in beta, and under active development. We welcome feedback to ensure our platform meets the needs of the community. Please leave us feedback using the button on the bottom right corner of the screen!\\n\\nWe are working on several upcoming features that will make the platform even better. Many of these features are already available in our Python meta-analysis library, NiMARE, and we are actively working on the user facing online interfaces.\\n\\n- **Image-based Meta-Analysis (IBMA)**. We have developed algorithms in NiMARE for using whole-brain statistical maps as inputs to meta-analysis. This is more powerful and sensitive technique compared to Coordinate-base Meta-Analysis. Soon, you will be able to use NeuroVault data as inputs for your meta-analyses.\\n- **MKDA Chi-squared / Association test**. A hallmark feature of Neurosynth is the ability to relate meta-analytic findings to the rest of the literature, to determine the strength and specificity of an association (this was previously called \\"reverse inference\\"). This will soon be possible on your custom meta-analyses.\\n- **A wide range of improvements to the user experience**. We are in the process of re-working parts of the online interface to decrease friction when creating a StudySet, making study utilization, and editing more intuitive. \\n\\nI would like to thank everyone involved in this highly-collaborative project, but especially James Kent, a postdoctoral fellow, and Nick Lee, a software engineer, who did the lion\'s share of the work.\\n\\nWe are excited for you to try it and let us know what you think.\\n\\n-Alejandro"}]}')}}]);