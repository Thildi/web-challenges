console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
function createSocialMediaPost() {
  // Create main post element
  const post = document.createElement("article");
  post.classList.add("post");

  // Create post content
  const postContent = document.createElement("p");
  postContent.classList.add("post__content");
  postContent.textContent =
    "This is a new social media post created with JavaScript!";

  // Create post footer
  const postFooter = document.createElement("footer");
  postFooter.classList.add("post__footer");

  // Create post username
  const username = document.createElement("span");
  username.classList.add("post__username");
  username.textContent = "@newuser";

  // Create like button
  const newLikeButton = document.createElement("button");
  newLikeButton.classList.add("post__button");
  newLikeButton.setAttribute("data-js", "like-button");
  newLikeButton.setAttribute("type", "button");
  newLikeButton.textContent = "♥ Like";
  newLikeButton.addEventListener("click", handleLikeButtonClick);

  // Assemble the post
  postFooter.appendChild(username);
  postFooter.appendChild(newLikeButton);
  post.appendChild(postContent);
  post.appendChild(postFooter);

  // Append the new post to the body
  document.body.appendChild(post);
}

// Call the function to create and append the new post
createSocialMediaPost();
