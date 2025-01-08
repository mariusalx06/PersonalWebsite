import styles from "./InfoSection.module.css";

const aboutMe = {
  profession: "Junior Web Developer",
  location:
    "Craiova, Romania <img src='https://flagcdn.com/32x24/ro.png' width='16' height='12' alt='Romania Flag'> ",
  languages: [
    " <img src='https://flagcdn.com/32x24/gb.png' width='16' height='12' alt='United Kingdom Flag'> English (Fluent)",
    " <img src='https://flagcdn.com/32x24/it.png' width='16' height='12' alt='Italy Flag'> Italian (Intermediate)",
    " <img src='https://flagcdn.com/32x24/ro.png' width='16' height='12' alt='Romania Flag'> Romanian (Native)",
  ],
  goals: [
    "Become a Senior Web Developer",
    "Learn new frameworks",
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
      .replace(/"([^"]+)"/g, `<span class="${styles.string}"> "$1"</span>`)
      .replace(/\[/g, `<span class="${styles.array}">[</span>`)
      .replace(/\]/g, `<span class="${styles.array}">  ]</span>`);
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
            }"</span>,\n  languages: <span class="${
              styles.array
            }">[</span>\n    ${aboutMe.languages
              .map(
                (language, index) =>
                  `<span class="${styles.string}">"${language}"</span>${
                    index < aboutMe.languages.length - 1 ? "," : ""
                  }`
              )
              .join("\n    ")}\n  <span class="${
              styles.array
            }">]</span>,\n  goals: ${formatJson(aboutMe.goals)}\n<span class="${
              styles.brace
            }">};</span>`,
          }}
        />
      </pre>
    </section>
  );
}
