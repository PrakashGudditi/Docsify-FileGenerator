# Docsify File Generator

- A simple script to generate files for [docsify](https://docsify.js.org/#/) automatically.
- It can be useful when using docsify to take personal notes and want to organize notes into sections.
- This script helps generate files for topics, subtopics and pages. For example:
    + Main Topic 1
        * Subtopic 1
            - Page1
            - Page2
        * Subtopic 2
            - Page3
            - Page4
- This script automatically generates files for these and als0 updates readme.md, _navbar.md and sidebar.md with correct links 


# Create Topic
- Create topic at the root level
- Steps involved (Example topic1)
    + Update `README.md` with new topic link
    > Input: topic Name and URL ( eg: [Regular Expressions](/regularExpression/) )
    + Add link of the topic in `_sidebar.md` as well
    + Create a folder with name of the topic
    + Create `_navbar.md` file inside topic folder
    > file content should be `* [Home](/)`
    + Create `README.md` file inside topic folder
    > Add display name of the topic as header in README.md file<br>

    _This file will containg list of all subtopics in the topic_
    + Create folder for storing images related to the topic
    > Location: \assets\images\topic1


# Create Sub-topic
- Create sub-topic inside main topic
- Steps (Example: topic1\subtopic1)
    + Add link of the subtopic inside `README.md` file of the main topic _(topic1)_
    > Input: main topic name, subtopic original name, display name and URL
    + Create subtopic folder inside main topic's folder
    + Create `_navbar.md` file inside subtopic's folder<br>
       * `_navbar.md` file's content <br>
        ```
        * [Home](/)
        link of the parent topic
        ```
    + Create `_sidebar.md` file inside main topic's folder
        * Add subtiopic's display name as heading in the file
        * This file will contain links of all the pages in the subtopic
    + Create folder for storing images related to subtopic
    > Location: \assets\images\maintopic\subtopic1


# Create Page
- Create page inside subtopic
- Steps (Example: topic1\subtopic1\page1)
    + Add link of the page in subtopic's `_sidebar.md` file
    > Input: Page original name, display name and URL
    + Create a `.md` file for the page inside subtopic's folder