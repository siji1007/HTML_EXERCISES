function showContent(topic) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.topic-content');
    contentSections.forEach((section) => {
      section.style.display = 'none';
    });

    // Show the selected content section
    const selectedContent = document.getElementById(topic);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }