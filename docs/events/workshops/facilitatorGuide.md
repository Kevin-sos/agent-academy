---
title: Facilitator Guide
---

## Facilitator Guide

Everything you need to deliver Agent Academy as a live workshop from timing plans, environment setup, to common issues, and pro tips from facilitators who've been in the room.

::: tip Before you facilitate
Work through the full curriculum yourself before delivering it live. There's no substitute for having personally hit the friction points your participants will hit.
:::

## Using the slide decks

You have a [presenter deck](./presentationMaterials.md) for each path.

Each deck contains: title slide, welcome/agenda/setup/scenario, then for each module: a **divider slide**, a **concept slide** (the "brief presentation"), and a **walkthrough slide** (objectives + steps for the lab).

**How to use them:**

- Open on divider slide while learners settle in from a break
- Show the concept slide as your "stand-and-deliver" intro (3–5 min)
- Leave the walkthrough slide up on a side monitor during the lab
- Recap + Resources slides for wrap-up

## When instructor demos make sense

| Demo when… | Skip the demo when… |
|---|---|
| The UI has > 5 clicks before the first meaningful action | The lab is short (< 15 min) and self-explanatory |
| A failure mode is non-obvious (e.g., schema name conflicts, Frontier preview toggle) | Learners can recover from a wrong click in < 30 sec |
| The output is invisible (background flows, triggers firing) | The lab is mostly text authoring (instructions, prompts) |
| > 25% of learners get stuck at the same step in prior runs | Concept slide already shows the end state clearly |

**Rule of thumb:** demo the *first 90 seconds* of any lab where the entry point is ambiguous (where do I click first?). After that, let them work.

## Environment prerequisites

This is the most critical section. Environment issues are the number one reason workshops stall. Get this sorted before anyone arrives.

### What every participant needs

| Requirement | Notes |
|-------------|-------|
| Work or school Microsoft 365 account | Personal @outlook.com, @gmail.com accounts **do not work** |
| Microsoft Copilot Studio trial or license | [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio) — 30-day free trial |
| Power Apps Developer Plan | Required to create a dev environment — [aka.ms/PowerAppsDevPlan](https://aka.ms/PowerAppsDevPlan) |
| A dedicated developer environment | **Not** a managed environment — managed environments block agent flows |
| Modern browser | Edge or Chrome recommended. Firefox works. Safari has known issues |
| Copilot Studio Authors role enabled | Required to publish agents in free trial environments (see setup steps below) |

### Current Course Prerequisites

Recruit and Operative now use the Microsoft Copilot harness. Review the current [Recruit curriculum](/recruit-nextgen/) and [Operative curriculum](/operative-nextgen/) for their setup requirements and mission sequence.

## Pre-workshop setup checklist

We recommend that you provide participants with an environment and do all of the course setup steps if possible. If you require participants to bring their own environment, we suggest you send this to participants **at least 3–5 days before** the event to have them ensure their environment is created. Environment provisioning takes time and trials need to activate.

```plaintext
□ Create or confirm a work/school Microsoft 365 account
□ Sign up for Copilot Studio trial at aka.ms/TryCopilotStudio
□ Sign up for Power Apps Developer Plan at aka.ms/PowerAppsDevPlan
□ Confirm developer environment is created (not a managed environment)
□ Enable Copilot Studio Authors role:
    □ Create a security group in admin.cloud.microsoft
    □ Add yourself to the group
    □ Assign the group to the Copilot Studio Authors role in admin.powerplatform.com
□ Create SharePoint IT Help Desk site (Recruit only)
□ Add Devices list data + Image column (Recruit only)
□ Copy and save your SharePoint site URL (Recruit only)
□ Join the Frontier program (Operative MCP module only)
```

## Course workshop formats

Use the [Recruit curriculum](/recruit-nextgen/) and [Operative curriculum](/operative-nextgen/) to plan workshop sessions. The previous workshop schedules covered missions that are no longer part of these courses.

## Common issues and how to handle them

These are the problems that come up most often in live delivery. Have these answers ready before anyone asks.

### Environment and setup

::: details Trial enrollment fails or shows an error
**Cause:** The tenant admin has disabled self-service sign-up.
**Fix:** The participant needs their IT admin to re-enable self-service purchases, or they need to work in a fresh personal trial tenant created with a work email. Personal @gmail or @outlook accounts won't work.
:::

::: details Copilot Studio trial activates but they can't publish agents
**Cause:** The Copilot Studio Authors role isn't assigned. The trial changed to restrict publishing by default.
**Fix:** Walk them through creating a security group in admin.cloud.microsoft, adding themselves, and assigning it to the Copilot Studio Authors role in admin.powerplatform.com. This is a 10-minute fix but has many steps — ideally done in pre-work.
:::

::: details Developer environment is a managed environment
**Cause:** Organizational IT policy. Managed environments block adding Power Automate flows as agent tools.
**Fix:** They need to create a new non-managed developer environment via the Power Apps Developer Plan. They cannot use a managed environment for these labs.
:::

::: details Can't import a solution
**Cause:** Missing Dataverse access or wrong environment selected.
**Fix:** Confirm they're in their developer environment (not the default environment) and that Dataverse is provisioned. Check the environment selector in the top-right of Power Apps.
:::

## Facilitator tips

**Do an environment check before you start.** Reserve the first 15–20 minutes for confirming everyone can access Copilot Studio and is in the right environment. This investment pays back in saved time later.

**Pair people up.** If someone's environment isn't working, pair them with someone whose is. They can still learn by co-piloting, and you avoid leaving anyone behind while you troubleshoot.

**Mission 09 (Agent Flows) will take longer than expected.** There are many steps, some UI lag, and participants who've never used Power Automate need orientation. Build extra buffer before and after this one.

**The Frontier/MCP module is an advanced bonus, not a required gate.** If participants don't have Frontier access, skip Mission 10. Don't let it derail your day.

**Pre-create the SharePoint site the night before.** If you have a demo account, create the Contoso IT SharePoint site, populate the Devices list, and show participants a working version. They can follow along while theirs provisions.

**Have the completion badge form link ready.** Many participants finish the track but don't know how to claim their badge. Post the link in chat at the end and walk through it once.

**Set expectations on progressive difficulty.** Tell participants upfront: it's completely normal not to finish every module. The curriculum is designed to stretch. Better to go deep on fewer modules than rush through all of them.

## Resources

- [Agent Academy Curriculum](https://aka.ms/agent-academy)
- [Recruit track](https://microsoft.github.io/agent-academy/recruit-nextgen/)
- [Operative track](https://microsoft.github.io/agent-academy/operative-nextgen/)
- [Badge claim form](https://aka.ms/agent-academy-recruit/form)
- [Global AI Community account](https://globalai.community/auth/login) — required for badge delivery
- [GitHub Issues](https://github.com/microsoft/agent-academy/issues) — report bugs or content problems

---

*Have tips from your own delivery? [Open an issue](https://github.com/microsoft/agent-academy/issues) or submit a PR — this guide gets better with every workshop.*
