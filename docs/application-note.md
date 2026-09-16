# Application Note

Draft; resolve the tool-attribution caveat before submitting. The note below is under 300 words.

The most recent project I built with Codex and Claude Code was Book Illustration
Studio, a local application using React, TypeScript, FastAPI, SQLite, and the Gemini
API. It turns book text into character portraits and a chapter illustration.

The tools helped me implement the application, but I still had to check the generated
code against real behavior. During a live image-generation test, the implementation
requested PNG output, but the API rejected the request and required JPEG for that
call. The mocked tests had not caught this mismatch.

I investigated the error and, with AI assistance, corrected the image-format handling
and the relevant tests. I then reran the live smoke test to verify that both portrait and
illustration generation worked.

This taught me that passing mocked tests does not guarantee that an external
integration works in practice. AI helped me write and fix the code, while I was
responsible for understanding the change and verifying the actual results. The
application is a local prototype, not a production service.
