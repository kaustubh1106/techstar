import React from 'react'
import '../styles/Blog.css'
const Blog = () => {
    return (
        <div class="write-blog-section">
            <h2>Write a Blog</h2>
            <form class="blog-form">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required />

                    <label for="author">Author:</label>
                    <input type="text" id="author" name="author" required/>

                        <label for="category">Category:</label>
                        <select id="category" name="category">
                            <option value="technology">Technology</option>
                            <option value="programming">Programming</option>
                            <option value="trends">Trends</option>
                            
                        </select>

                        <label for="content">Content:</label>
                        <textarea id="content" name="content" rows="8" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>

                )
}

                export default Blog