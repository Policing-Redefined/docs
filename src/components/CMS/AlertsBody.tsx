// src/components/CMS/AlertsBody.tsx
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

// 1) Custom renderers (typed) — gives you `inline` on code blocks
const components: Components = {
    a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
    code({ inline, className, children, ...props }) {
        return inline ? (
            <code className={className ?? ""} {...props}>
                {children}
            </code>
        ) : (
            <pre className="md-pre">
                <code className={className ?? ""} {...props}>
                    {children}
                </code>
            </pre>
        );
    },
};

// 2) (Optional) Relax the sanitizer a bit so lists/tables survive
const schema: Parameters<typeof rehypeSanitize>[0] = {
    ...defaultSchema,
    tagNames: [
        ...(defaultSchema.tagNames ?? []),
        "h1",
        "h2",
        "h3",
        "blockquote",
        "pre",
        "code",
        "ul",
        "ol",
        "li",
        "strong",
        "em",
        "a",
        "p",
        "br",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
    ],
    attributes: {
        ...(defaultSchema.attributes ?? {}),
        a: [["href"], ["title"], ["rel"], ["target"]],
        code: [["className"]], // keep language class if you add highlighting later
    },
};

export function AlertsBody({ markdown }: { markdown: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}                 // <-- plural
            rehypePlugins={[[rehypeSanitize, schema]]} // <-- plural
            components={components}                    // <-- now in scope
        >
            {markdown}
        </ReactMarkdown>
    );
}
