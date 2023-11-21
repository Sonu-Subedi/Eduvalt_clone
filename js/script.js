const courseContainer = document.getElementById("courseContainer");

data.forEach((course) => {
  const courseItem = document.createElement("div");
  courseItem.classList.add("course-item");

  let ratingStars = "";
  for (let i = 0; i < 5; i++) {
    ratingStars +=
      '<img class="rating-icon" src="./assets/ratings.svg" alt="Star">';
  }
  let priceElement = `
  <div class="course-price">${course.originalPrice}</div>
`;
  if (course.discountedPrice) {
    priceElement = `
    <div class="course-price discounted"><strike>${course.originalPrice}</strike></div>
    <div class="course-discounted-price">${course.discountedPrice}</div>
  `;
  }

  courseItem.innerHTML = `
<div class="course-item">
  <img class="course-img" src="${course.url}" alt="${course.courseName}">
  <div class="courses__item-content">
    <div class="course-info">
      <div class="course-icon"><img src="./assets/lessons.svg" alt="Lessons"></div>
      <div class="course-lessons">${course.lessons} Lessons</div>
      <div class="course-icon"><img src="./assets/time.svg" alt="Duration"></div>
      <div class="course-duration">${course.duration}</div>
      <div class="course-icon"><img src="./assets/users.svg" alt="Students"></div>
      <div class="course-students">Students</div>
    </div>
    <h5 class="course-title">${course.title}</h5>
    <div class="rating-container">
    ${ratingStars}
    <div class="course-rating">(0${course.totalRating})</div>
    </div>
    <div class="divider"></div>
    <div class= courses__items-bottom>
    <img class="teacher-profile" src="${course.teacherProfile}" alt="${course.courseName}">
    <div class="course-instructor">${course.instructor}</div>
    <div class="course-price">
    ${priceElement}
    </div>
  </div>
</div>

`;

  courseContainer.appendChild(courseItem);
});
