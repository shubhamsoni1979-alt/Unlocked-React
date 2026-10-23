
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { reactTopics } from "../data/ReactTopics";
import logo from "../assets/logo.png";
import "./Dashboard.css";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(null);

  const requestedTopic = searchParams.get("topic");
  const currentIndex = Math.max(
    0,
    reactTopics.findIndex((item) => item.id === requestedTopic)
  );

  const currentTopic = reactTopics[currentIndex];

  function changeTopic(id) {
    setSearchParams({ topic: id });
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copyCode(code, key) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(key);
    } catch (error) {
      console.error("Could not copy code:", error);
    }
  }

  return (
    <div className="tutorial-page">
      <button
        className="tutorial-mobile-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Topics
      </button>

      {sidebarOpen && (
        <div
          className="tutorial-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`tutorial-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="tutorial-sidebar-top">
          <Link to="/" className="tutorial-brand">
            <img src={logo} alt="" />
            <span>Unlocked-React</span>
          </Link>
          <span className="tutorial-section-label">DOCUMENTATION</span>
          <h2>React Tutorial</h2>
          <p>Everything you need to master React.</p>

        </div>

        <div className="tutorial-navigation">
          <div className="tutorial-nav-label">GETTING STARTED & CONCEPTS</div>

          {reactTopics.map((topic, index) => (
            <button
              key={topic.id}
              className={`tutorial-nav-item ${topic.id === currentTopic.id ? "selected" : ""
                }`}
              onClick={() => changeTopic(topic.id)}
            >
              <span className="nav-topic-number">
                {String(reactTopics.indexOf(topic) + 1).padStart(2, "0")}
              </span>
              <span>{topic.title}</span>
              {topic.id === currentTopic.id && (
                <span className="active-dot" />
              )}
            </button>
          ))}
        </div>

        <div className="tutorial-sidebar-footer">
          <span>✧ Unlocked-React</span>
          <small>Learn. Practice. Build.</small>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="tutorial-main">
        <div className="tutorial-content">
          {/* <div className="tutorial-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>React Tutorial</span>
            <span>/</span>
            <strong>{currentTopic.title}</strong>
          </div> */}

          <div className="tutorial-article-heading">
            <span className="tutorial-eyebrow">
              CHAPTER {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <h1>{currentTopic.heading}</h1>
            <p>
              Learn React step by step with clear explanations and
              practical code examples.
            </p>
          </div>

          <article className="tutorial-article">
            {currentTopic.sections.map((section, index) => (
              <section key={`${currentTopic.id}-${index}`} className="tutorial-section">
                <h2>{section.heading}</h2>

                {section.text && <p>{section.text}</p>}

                {section.note && (
                  <div className="tutorial-note">
                    <span className="note-icon">✦</span>
                    <p>{section.note}</p>
                  </div>
                )}

                {section.code && (
                  <div className="tutorial-code-container">
                    <div className="tutorial-code-header">
                      <span className="code-language">
                        <span className="code-dot" />
                        {section.code.startsWith("npm")
                          ? "TERMINAL"
                          : "JSX"}
                      </span>
                      <button
                        onClick={() =>
                          copyCode(section.code, `${currentTopic.id}-${index}`)
                        }
                      >
                        {copied === `${currentTopic.id}-${index}`
                          ? "✓ Copied"
                          : "▢ Copy Code"}
                      </button>
                    </div>

                    <pre>
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.output && (
                  <div className="tutorial-output">
                    <span>EXPECTED OUTPUT</span>
                    <pre>{section.output}</pre>
                  </div>
                )}
              </section>
            ))}
          </article>

          <footer className="tutorial-footer">
            Unlocked-React · Built for developers who love learning.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
