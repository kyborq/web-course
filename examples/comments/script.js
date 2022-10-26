const comments = [
  { name: "John Smith", content: "Cool glasses by the way 😎" },
];

window.onload = function () {
  const handleRender = () => {
    commentSection.replaceChildren([]);

    comments.forEach((comment) => {
      const commentElement = createCommentElement(
        comment.name,
        comment.content
      );

      commentSection.appendChild(commentElement);
    });
  };

  const createCommentElement = (name, content) => {
    const commentParent = document.createElement("div");
    commentParent.className = "comment";

    const comment = document.createElement("div");
    comment.className = "comment-content";

    const commentAuthor = document.createElement("div");
    commentAuthor.className = "comment-author";
    commentAuthor.innerText = name;

    const commentText = document.createElement("div");
    commentText.className = "comment-text";
    commentText.innerText = content;

    comment.appendChild(commentAuthor);
    comment.appendChild(commentText);

    commentParent.appendChild(comment);

    return commentParent;
  };

  const handleSave = () => {
    const commentField = document.querySelector("#comment-text");
    const comment = commentField.value;

    comments.push({
      name: "John Smith",
      content: comment,
    });

    commentField.value = "";
    handleRender();
  };

  const commentSection = document.querySelector("#comment-section");
  const saveButton = document.querySelector("#save");

  saveButton.onclick = handleSave;

  handleRender();
};
