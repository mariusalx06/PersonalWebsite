import styles from "./InfoSection.module.css";

const aboutMe = {
  profession: "Junior Web Developer",
  location: "Craiova, Romania",
  languages: [
    "English (Fluent)",
    "Italian (Intermediate)",
    "Romanian (Native)",
  ],
  goals: [
    "Become a Senior Web Developer",
    "Contribute to open-source projects",
    "Build my own tech startup",
  ],
};

export default function InfoSection() {
  const formatJson = (obj) => {
    return JSON.stringify(obj, null, 2)
      .replace(/const/g, `<span class="${styles.keyword}">const</span>`) // Color `const`
      .replace(/aboutMe/g, `<span class="${styles.variable}">aboutMe</span>`) // Color `aboutMe`
      .replace(/{/g, `<span class="${styles.brace}">{</span>`) // Color `{`
      .replace(/}/g, `<span class="${styles.brace}">}</span>`) // Color `}`
      .replace(/"([^"]+)"/g, `<span class="${styles.string}">"$1"</span>`) // Color string values
      .replace(/\[/g, `<span class="${styles.array}">[</span>`) // Color array brackets
      .replace(/\]/g, `<span class="${styles.array}">]</span>`); // Color array brackets
  };

  return (
    <section className={styles.info}>
      <pre className={styles.codeBlock}>
        <code
          dangerouslySetInnerHTML={{
            __html: `<span class="${
              styles.keyword
            }">const</span> <span class="${
              styles.variable
            }">aboutMe</span> = <span class="${
              styles.brace
            }">{</span>\n  profession: <span class="${styles.lightBlue}">"${
              aboutMe.profession
            }"</span>,\n  location: <span class="${styles.lightBlue}">"${
              aboutMe.location
            }"</span>,\n  languages: ${formatJson(
              aboutMe.languages
            )},\n  goals: ${formatJson(aboutMe.goals)}\n<span class="${
              styles.brace
            }">};</span>`,
          }}
        />
      </pre>
      <div className={styles.about}>
        <p>
          Holding both a{" "}
          <span className={styles.highlight}>
            Bachelor&apos;s and Master&apos;s degree in Computer Science
          </span>
          , I possess a solid foundation in software development, algorithms,
          and problem-solving, with a specialization in{" "}
          <span className={styles.highlight}>Full Stack Web Development</span>.
        </p>
      </div>
    </section>
  );
}
