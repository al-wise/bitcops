<script>
        // Sample data for blog posts (replace with your data)
        const blogPosts = [
            {
                title: "Blog Post Title 1",
                date: "June 10, 2023",
                author: "John Doe",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor mi et tortor luctus, vel...",
                thumbnail: "https://via.placeholder.com/150",
            },
            {
                title: "Blog Post Title 2",
                date: "June 15, 2023",
                author: "Jane Smith",
                content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac...",
                thumbnail: "https://via.placeholder.com/150",
            },
            {
                title: "Blog Post Title 3",
                date: "June 20, 2023",
                author: "Alice Johnson",
                content: "Fusce sagittis odio eu nulla varius, et placerat odio fermentum. Aliquam tincidunt, velit nec...",
                thumbnail: "https://via.placeholder.com/150",
            },
        ];

        // Function to dynamically create blog post cards
        function createBlogPostCard(post) {
            const postCard = document.createElement("div");
            postCard.className = "bg-white shadow-lg p-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl";
            postCard.innerHTML = `
                <div class="mb-4">
                    <img src="${post.thumbnail}" alt="${post.title}" class="w-full h-auto rounded-lg">
                </div>
                <h2 class="text-xl font-semibold text-blue-600 mb-2">${post.title}</h2>
                <p class="text-gray-600 text-sm mb-4">Published on ${post.date} by ${post.author}</p>
                <p class="text-gray-700 mb-4">${post.content}</p>
                <a href="#" class="text-blue-500 hover:underline">Read more</a>
            `;
            return postCard;
        }

        // Function to populate blog posts
        function populateBlogPosts() {
            const blogContainer = document.querySelector(".grid");
            blogPosts.forEach((post) => {
                const postCard = createBlogPostCard(post);
                blogContainer.appendChild(postCard);
            });
        }

        // Load blog posts when the page loads
        window.addEventListener("load", populateBlogPosts);
    </script>