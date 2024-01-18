
# Welcome to PDF-pedia Chat 📚🗨️

PDF-pedia is an exciting open-source chat with documents project using Retrieveal Augemented Generation(RAG) implementaion that leverages a powerful open source Large language model and tech stack to provide a user-friendly application. 

PDF-pedia is a chat with documents project that simplifies the way you interact with PDFs. 

It uses open-source Large Language Models (LLMs) and can run entirely on your local machine.PDF-pedia harnesses the power of an open-source large language model. It can run entirely locally, making it a **privacy-focused** and efficient solution for PDF document management.

## What is PDF-pedia? 🚀

PDF-pedia is a user-friendly solution that combines the power of open-source LLMs with local execution. 

It allows you to have natural conversations with your PDF documents, making it easier to extract information, generate answers, and more.

## Key Features:

- **Open Source LLMs**: PDF-pedia leverages open-source Large Language Models, ensuring accessibility and transparency.

- **Local Execution**: Run PDF-pedia on your own machine, putting you in control of your data and privacy.

- **Simplified PDF Interaction**: Chat with your documents, extract information, and generate answers as if you're having a conversation.

Get started with PDF-pedia and enhance your PDF document management experience today! 📚🖥️💡

## Tech Stack 💻

Our application relies on a robust tech stack, carefully chosen to ensure high performance and user satisfaction. Here's an overview of the key technologies:

- **Voy as the Vector Store**: We utilize Voy for storing and managing vectors. This technology is fully WebAssembly (WASM) compatible, ensuring seamless execution in the browser. This contributes to a faster and more responsive experience for users.

- **Ollama for Local LLM**: Ollama is responsible for running a Language Model Locally (LLM) and exposing it to the web app. This approach enhances the security and reliability of our application, allowing for real-time interaction with PDF documents.

- **LangChain.js for Orchestration**: LangChain.js is the backbone of our application, orchestrating all the pieces seamlessly. It helps in calling the models, performing retrieval, and ensuring smooth operation. Its architecture is designed for efficiency and user-friendliness.

- **Transformers.js for Embeddings**: Transformers.js is a critical component responsible for running embeddings in the browser. This technology ensures that PDF documents are processed with high accuracy and efficiency.

- ![tech used](https://res.cloudinary.com/dwtytn7fl/image/upload/v1705557292/20240118_112316_nubake.png)
- ![tech used](https://res.cloudinary.com/dwtytn7fl/image/upload/v1705557291/20240118_112346_lb5zom.png)

## How to Run and Use PDF-pedia 🚀

Running and using PDF-pedia is a straightforward process. It's a Next.js app that allows you to extract content from uploaded PDFs, store it, and perform Rapid Answer Generation (RAG), all on the client side. Plus, you can even go offline after the site loads! Here's a step-by-step guide to get started:

To run/deploy this yourself, simply fork this repo and install the required dependencies with `yarn`.

There are no required environment variables!

1. **Explore the Live Version**:
   You can experience PDF-pedia right away by visiting the live version at [PDF-pedia Live Demo](Insert demo link). This gives you a quick overview of what the project can do.

2. **Download and Set Up Ollama**:
   To harness the full power of PDF-pedia, you'll need to download and set up Ollama. Ollama allows the web app to access a locally running Mistral instance. Follow these steps:

   - Download Ollama from the official repository.
   - Install and configure Ollama on your system as per the provided instructions.

3. **Allow Site Access to Ollama**:
   To enable PDF-pedia to communicate with Ollama, you need to set a few environment variables. Open a terminal and run the following commands:

   ```bash
   OLLAMA_ORIGINS=https"Deployment_Link" OLLAMA_HOST=127.0.0.1:11435 ollama serve

4. **Pull Mistral Instance**:
In a separate terminal window, run the following command to connect PDF-pedia to the locally running Mistral instance:

   ```bash
   OLLAMA_HOST=127.0.0.1:11435 ollama pull mistral

## How to Contribute 🌟

We are always looking for passionate contributors who want to be a part of this exciting project. Whether you are an experienced developer or just starting your journey in web development, there are numerous ways you can contribute:

## Get Started 🚀

Ready to dive into the world of PDF-pedia? Here's how you can get started:

1. Clone the PDF-pedia repository from GitHub.
2. Explore the codebase and documentation to familiarize yourself with the project.
3. Join our community on forums or chat platforms to connect with other contributors.
4. Start small, pick an issue or feature you're interested in, and make your first contribution.

Remember, every contribution, no matter how small, helps us improve PDF-pedia and make it an even better PDF application.

Join us in shaping the future of web development and PDF document management. Your expertise and passion can make a real difference!

Happy coding! 🚀👩‍💻👨‍💻

## 🙏 Thank you!

**Credits**:

[@dawchihliou](https://twitter.com/dawchihliou) for making Voy <br> 
[@jmorgan](https://twitter.com/jmorgan) and [@mchiang0610](https://twitter.com/mchiang0610) for making Ollama <br>
[@xenovacom](https://twitter.com/xenovacom) for making Transformers.js <br>

For more, follow me on LinkedIn [@Bhaskar_Pandey](https://www.linkedin.com/in/bhaskar-pandey-4e5/)
