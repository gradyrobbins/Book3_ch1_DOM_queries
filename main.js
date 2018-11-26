let name = "Grady";
console.log(name);

/*
This code will only return the first section component even though there are three components with the same class
*/
const sectionEl = document.querySelector(".article__section");

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const sectionArticleHeader = document.querySelector(".article__header");
sectionArticleHeader.textContent = `Welcome to the ${name} blog`;

/*
This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
Get reference to the section with the class of `smallText`
and remove that class. Then add a new class of `largeText`
*/
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

/*
This code will return all section components
*/
const sectionEl2 = document.querySelectorAll(".article__section")
console.log("sectionEl2", sectionEl2)
// NodeList(3)
// 0 : section.article__section.article__header
// 1 : section.article__section.article__body
// 2 : section.article__section.article__footer

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const sectionElHeaders = document.querySelectorAll(".article__header")
console.log("sectionElHeaders", sectionElHeaders)



// Obtain a reference the element with a class of dashed and remove it.
const sectionDashed = document.querySelector(".dashed");
sectionDashed.classList.remove("dashed");
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const sectionFooter = document.querySelector(".article__footer");
sectionFooter.classList.add("goldenrod");
