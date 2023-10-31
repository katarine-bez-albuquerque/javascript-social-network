/**
 * App.js
 */

/**
 * Import class
 */
import User from './User.js';
import Message from './Message.js';
import Post from './Post.js';

/**
 * Variables
 */
const text_input = document.querySelector(".text_input");
const text_message = document.querySelector(".text_message");
const button_publish = document.querySelector(".bt_publish");
const posts = document.querySelector(".posts");

/**
 * class instance
 */
const user = new User();
const message = new Message();
const post = new Post();

/**
 * If the number is less than ten, put zero in front.
 */
function numbers(number) {
    if(number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}

/**
 * instance method 
 */
function instantiate(users, messages) {
    user.name = users;
    message.user = user.name;
    message.description = messages;
    post.user = user.name;
    post.message = message.description;
    return post;
}

/**
 * Create Element Section
 */
function createElementSection(element, className) {
    const elementName = document.createElement(element); 
    elementName.classList.add(className);    
    return elementName;
}

/**
 * Create Element Aside
 */
function createElementAside(element, className1, className2) {
    const elementName = document.createElement(element); 
    elementName.classList.add(className1);    
    elementName.classList.add(className2);   
    return elementName;
}

/**
 * Create Element Paragraph
 */
function createElementParagraph(elementName, textContent) {
    const pElement = document.createElement(elementName);
    pElement.textContent = textContent;
    return pElement;    
}

/**
 * Create Element Title h4
 */
function createElementTitleH4(elementNameTitle, elementStrong, user, text, date) {
    const h4Element = document.createElement(elementNameTitle);
    const strongElement = document.createElement(elementStrong);

    let d = new Date();
    date = d.toLocaleDateString();

    strongElement.textContent = user + " "+ text + " - " + date;
    h4Element.appendChild(strongElement);
    return h4Element;
}

/**
 * Create Element Input
 */
function createElementInput(elementName) {
    const input = document.createElement(elementName);
    input.classList.add('text_input');
    input.setAttribute ='name';
    input.placeholder = "What is your name...";
    return input;
}

/**
 * Create Element Textarea
 */
function createElementTextarea(elementName) {
    const textarea = document.createElement(elementName);
    textarea.classList.add('text_message');
    textarea.placeholder = "Message...";
    return textarea;
}

/**
 * Create Element Button
 */
function createElementButtons(elementName, textButton) {
    const button = document.createElement(elementName);
    button.classList.add('bt_post'); 
    button.textContent = textButton;
    return button;
}

/**
 * Clear Input and Textarea
 */
function clear(input, textarea) {
    input.value = "";
    textarea.value = "";
}

/**
 * Create Post
 */
function createPost() {
    
    let post = instantiate(text_input.value, text_message.value);

    const postElement = createElementSection('article','post');
    
    const pElement = createElementParagraph('p', post.message);

    postElement.appendChild(pElement);
    
    const h4Element = createElementTitleH4('h4', 'strong', post.user, "posts" , post.date);

    postElement.appendChild(h4Element);

    const sectionButtons = createElementSection('section','comments_remove');
    
    const sectionCampos = createElementSection('section','comments_campos');
    
    const input = createElementInput('input');
    
    sectionCampos.appendChild(input);

    const textarea = createElementTextarea('textarea');
    
    sectionCampos.appendChild(textarea);

    sectionButtons.appendChild(sectionCampos);

    const postButtonRemove = createElementButtons('button', 'Remove');
        
    postButtonRemove.addEventListener('click', () => removePost(postElement));

    const postButtonComment = createElementButtons('button', 'Comment');

    postButtonComment.addEventListener('click', () => {
        if(input.value === '' || textarea.value === '') {
            alert("Fill in the empty fields!");
        }
        else {
            createComment(input, textarea, postElement);
        }
    });
    
    sectionButtons.appendChild(postButtonRemove);
    sectionButtons.appendChild(postButtonComment);
    
    postElement.appendChild(sectionButtons);    

    posts.appendChild(postElement);
    
    clear(text_input,text_message);
}

/**
 * Create Comment
 */
function createComment(input, textarea, parent) { 

    let post = instantiate(input.value, textarea.value);

    const comment = createElementAside('aside', 'post','comments');
    
    const pComment = createElementParagraph('p', post.message);

    comment.appendChild(pComment);

    const h4Element = createElementTitleH4('h4', 'strong', post.user, "comments" , post.date);
    
    comment.appendChild(h4Element);

    const sectionButtons = createElementSection('section','comments_remove');
    
    const sectionCampos = createElementSection('section','comments_campos');
  
    const input2 = createElementInput('input');

    sectionCampos.appendChild(input2);

    const textarea2 = createElementTextarea('textarea');

    sectionCampos.appendChild(textarea2);

    sectionButtons.appendChild(sectionCampos);
        
    const buttonComment = createElementButtons('button', 'Response');
    
    buttonComment.addEventListener('click', () =>  {
        if(input2.value === '' || textarea2.value === '') {
            alert("Fill in the empty fields!");
        }
        else {
            createComment(input2, textarea2, parent);
        }
    });
        
    sectionButtons.appendChild(buttonComment);
    
    comment.appendChild(sectionButtons);

    parent.appendChild(comment);

    clear(input,textarea);
    clear(input2,textarea2);
}

/**
 * Remove Post
 */
function removePost(post) {
    posts.removeChild(post); 
}

/**
 * Test Input and Textarea
 */
function testPublishPost(input, textarea) {
    if(input.value == "" || textarea.value == "") {
        alert("Fill in the empty fields!")
    }
    else {
        createPost();
    }
}

/**
 * Action Event Publish
 */
button_publish.addEventListener('click', () =>  testPublishPost(text_input, text_message) );
