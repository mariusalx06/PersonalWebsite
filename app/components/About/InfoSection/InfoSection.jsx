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
      .replace(/const/g, `<span class="${styles.keyword}">const</span>`)
      .replace(/aboutMe/g, `<span class="${styles.variable}">aboutMe</span>`)
      .replace(/{/g, `<span class="${styles.brace}">{</span>`)
      .replace(/}/g, `<span class="${styles.brace}">}</span>`)
      .replace(/"([^"]+)"/g, `<span class="${styles.string}">"$1"</span>`)
      .replace(/\[/g, `<span class="${styles.array}">[</span>`)
      .replace(/\]/g, `<span class="${styles.array}">]</span>`);
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
    </section>
  );
}
