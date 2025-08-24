export const pages: Record<string, any> = {
  home: {
    title: { rendered: "Eden Belanger" },
    excerpt: {
      rendered:
        "Full-stack developer with a passion for creating beautiful and functional web applications.",
    },
    content: {
      rendered:
        "<p>Full-stack developer with a passion for creating beautiful and functional web applications.</p>",
    },
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: "https://placehold.co/600x400",
        },
      ],
    },
    meta: {
      cta_label: "Get in touch",
      cta_link: "/contact",
    },
  },
  about: {
    content: {
      rendered: `
        <p>
          I am a software engineer with over 5 years of experience in the industry. I specialize in JavaScript, React, Node.js, and have a strong background in UI/UX design.
        </p>
        <p>
          I am passionate about building products that are not only user-friendly but also scalable and maintainable. I am always eager to learn new technologies and improve my skills.
        </p>
      `,
    },
  },
  experiences: {
    content: {
      rendered: `
        <h3 class="text-xl font-semibold">Work Experience</h3>
        <ul class="list-disc pl-5 mt-2">
          <li>
            <strong>Software Engineer</strong> at TechCorp (2020 - Present)
            <p class="text-sm">
              Developed and maintained web applications using React, TypeScript, and Node.js.
            </p>
          </li>
          <li>
            <strong>Junior Developer</strong> at WebSolutions (2018 - 2020)
            <p class="text-sm">
              Assisted in the development of websites and web applications for various clients.
            </p>
          </li>
        </ul>

        <h3 class="text-xl font-semibold mt-6">Education</h3>
        <ul class="list-disc pl-5 mt-2">
          <li>
            <strong>Bachelor of Science in Computer Science</strong> - University of Technology (2014 - 2018)
          </li>
        </ul>

        <h3 class="text-xl font-semibold mt-6">Interests</h3>
        <p>
            When I'm not coding, I enjoy hiking, photography, and playing the guitar.
        </p>
      `,
    },
  },
};
