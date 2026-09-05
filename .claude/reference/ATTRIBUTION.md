# Vendored reference attribution

The documents under this directory are vendored, unmodified reference material
used for design guidance only. They are not part of the application build.

## scroll-craft/

- Source: https://github.com/nateherkai/scroll-craft
- Author: Nate Herk
- License: MIT (see `scroll-craft/LICENSE`, fetched from the upstream repository)

## scroll-experience/

- Source: https://github.com/davila7/claude-code-templates
- Distributor: Daniel (San) Ávila, claude-code-templates
- License: MIT (see `scroll-experience/LICENSE`, fetched from the upstream repository)
- The skill file itself credits its original source as
  `vibeship-spawner-skills` under Apache 2.0, per its frontmatter.

## frontend-design/

- Upstream repository: https://github.com/anthropics/claude-plugins-official
- Original file path: `plugins/frontend-design/skills/frontend-design/SKILL.md`
- Upstream URL: https://github.com/anthropics/claude-plugins-official/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md
- Author/organization: Anthropic
- License: Apache 2.0. The skill's frontmatter states "Complete terms in
  LICENSE.txt"; that skill-local `LICENSE.txt` (Apache 2.0) was fetched from
  the same upstream directory and is vendored beside the skill under the same
  name. The repository-wide license is also Apache 2.0.
- Verified against upstream `main` on 2026-09-05.

## ui-design-system/

- Upstream repository: https://github.com/davila7/claude-code-templates
- Original file path: `cli-tool/components/skills/creative-design/ui-design-system/SKILL.md`
- Upstream URL: https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/creative-design/ui-design-system/SKILL.md
- Author/organization: Daniel (San) Ávila, claude-code-templates (no per-file
  author metadata in the skill itself)
- License: MIT (repository license, vendored as `ui-design-system/LICENSE`)
- Note: the skill references helper scripts (e.g. `design_token_generator.py`)
  that are NOT vendored; only the SKILL.md guidance is used here.
- Verified against upstream `main` on 2026-09-05.

## accessibility/

- Upstream repository: https://github.com/davila7/claude-code-templates
- Original file path: `cli-tool/components/skills/development/accessibility/SKILL.md`
- Upstream URL: https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/development/accessibility/SKILL.md
- Author/organization: the skill's own frontmatter credits author
  `web-quality-skills` (version 1.0), distributed via claude-code-templates
- License: MIT, declared both in the skill's frontmatter and by the repository
  license (vendored as `accessibility/LICENSE`)
- Verified against upstream `main` on 2026-09-05.

## senior-frontend/

- Upstream repository: https://github.com/davila7/claude-code-templates
- Original file path: `cli-tool/components/skills/development/senior-frontend/SKILL.md`
- Upstream URL: https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/development/senior-frontend/SKILL.md
- Author/organization: Daniel (San) Ávila, claude-code-templates (no per-file
  author metadata in the skill itself)
- License: MIT (repository license, vendored as `senior-frontend/LICENSE`)
- Note: the skill references companion scripts/tooling that are NOT vendored;
  only the SKILL.md guidance is used here.
- Verified against upstream `main` on 2026-09-05.

No changes have been made to the vendored files beyond placing them in this
directory layout.
