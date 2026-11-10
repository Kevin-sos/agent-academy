---
hide: false
preview: false
prev:
  text: Recruit overview
  link: /recruit-nextgen
next:
  text: Introduction to Agents
  link: /recruit-nextgen/01-introduction-to-agents
short-description: 'Set up your dev environment and personal list on the shared SharePoint site'
difficulty: 1
codename: OPERATION DEPLOYMENT READY
time: 30
harness: microsoft-copilot
credits: 0
tags:
  - setup
products:
  - copilot-studio
  - sharepoint
  - microsoft-365
industries:
  - it
created-date: 2026-08-05
last-edited-date: 2026-10-29
---

# 🚨 Mission 00: Course Setup {#mission-00-course-setup}

<mission-meta />

<mission-credits />

## 🎯 Mission Brief {#mission-brief}

Welcome to the first mission of your training as a Copilot Studio Agent.  
Before you can start building your first AI agent, you need to establish your **field-ready development environment**.

This briefing outlines the systems, access credentials, and setup steps required to successfully operate in the Microsoft 365 ecosystem.

## 🔎 Objectives {#objectives}

Your mission includes:

1. Using your organization-provided Microsoft 365 account
1. Creating a developer environment for Copilot Studio
1. Creating a personal data list on the shared SharePoint site for later missions

> [!IMPORTANT]
> Use the Microsoft 365 account and tenant provided by your organization. In Step 2, use the existing [SharePoint site](https://steria.sharepoint.com/sites/Accelerators-AgentAcademy); do not create a new site.

## 🔍 Prerequisites {#prerequisites}

Before you begin, ensure you have:

1. A **work or school email address** (personal @outlook.com, @gmail.com, etc., are not supported).
1. Access to the internet and a modern browser (Edge, Chrome, or Firefox recommended).  
1. Basic familiarity with Microsoft 365 (for example, signing into Office apps or Teams).  
1. (Optional) A credit card or billing method if you plan to purchase paid licenses.

## 🧪 Development Environment Setup {#development-environment-setup}

## Step 1: Create new developer environment

### Sign up for a Power Apps Developer Plan

Using your organization-provided Microsoft 365 account, sign up for a Power Apps Developer Plan to create a development environment for the course missions.

1. Sign up on the [Power Apps Developer Plan website](https://aka.ms/PowerAppsDevPlan).

    - Enter your email address
    - Tick the checkbox
    - Select **Start free**

    ![Sign up for Power Apps Developer Plan](images/00-sign-up-for-power-apps-developer-plan.png)

1. After signing up for the Developer Plan, you'll be redirected to [Power Apps](https://make.powerapps.com/). The environment uses your name, for example **Adele Vance's environment**. If there's already an environment with that name, the new developer environment is named **Adele Vance's (1)** environment.

    Use this developer environment in Copilot Studio when completing the labs.

> [!NOTE]
> Your organization may restrict Power Apps Developer Plan sign-up. If sign-up is unavailable, contact your administrator to request a development environment.
>
> If you are using an existing environment from your organization, ensure it is **not** a managed environment. Managed environment restrictions can prevent certain features — such as adding Power Automate flows as agent tools — from working correctly.

## 🔧 Required Setup (Everyone) {#required-setup-everyone}

The following step uses the existing organization SharePoint site.

## Step 2: Create your list on the shared SharePoint site

Use the existing [SharePoint site](https://steria.sharepoint.com/sites/Accelerators-AgentAcademy) for the course. Create a separate list for your work so it is easy to distinguish from other participants' lists.

1. Open the [Instructions channel in Microsoft Teams](https://teams.microsoft.com/l/channel/19%3AbP_bQb0JWYtf2Y4ZJLwNigIbwKQVHxp6S2BbWbnqueQ1%40thread.tacv2/Instructions?groupId=c34ba355-ea22-4c2e-bb78-5111d989fec9&tenantId=8b87af7d-8647-4dc7-8df4-5f69a2011bb5).
1. Open the channel's **Files** tab, then select **Open in SharePoint**.
1. On the SharePoint site, select **New** or **+ New**, then select **List**.

    ![Create a new SharePoint list](images/00-create-a-new-sharepoint-list.png)

1. Select **From Excel** to create the list with the course data and columns.

    ![Create SharePoint list from Excel](images/00-create-sharepoint-list-from-excel.png)

1. Select **Upload file**.

    ![Upload the EmployeeAssets Excel file](images/00-upload-the-employeeassets-excel-file.png)

1. Download the following ZIP file, extract it, then upload `EmployeeAssets.xlsx` to the list by selecting **Open**.

    <download-files path="recruit-nextgen/00-course-setup/assets/employee-assets" label="Download Excel .zip file for List" />

    ![Select the uploaded EmployeeAssets file](images/00-select-the-uploaded-employeeassets-file.png)

1. Next, in the **Customize** step, select the `EmployeeAssets` table and review the detected column types. Most columns are automatically detected as `Single line of text`, which is common when importing an Excel file. Some column types need to be adjusted, so we'll do that next.

    ![Customize the imported column data types](images/00-customize-the-imported-column-data-types.png)

1. Change the following columns manually from `Single line of text` to `Choice` fields.

    | Column       | Updated Type |
    | ------------ | ------------ |
    | Status       | Choice       |
    | Manufacturer | Choice       |
    | Asset Type   | Choice       |

    ![Change column types to Choice](images/00-change-column-types-to-choice.png)

1. Scroll to the right and change the following columns manually from `Single line of text` to `Choice`, `Date and time` and `Number` fields, respectively. Then select **Next**.

    | Column         | Updated Type  |
    | -------------- | ------------- |
    | Color          | Choice        |
    | Purchase Date  | Date and time |
    | Purchase Price | Number        |

    ![Change column types to Choice](images/00-change-column-types-to-choice-2.png)

1. Enter `EmployeeAssets - Your Name` as the list name, replacing `Your Name` with your own name. Select the **Show list in site navigation** checkbox, then select **Create**.

    ![Create the configured EmployeeAssets list](images/00-create-the-configured-employeeassets-list.png)

1. Add a new column with the type `Hyperlink`. Scroll across the list, select **+ Add column**, select **Hyperlink**, then select **Next**.

    ![Add a new hyperlink column](images/00-add-a-new-hyperlink-column.png)

1. Enter the following information for the column and select **Save**.

    | Field       | Value                               |
    | ----------- | ----------------------------------- |
    | Name        | Image URL                           |
    | Description | The image URL of the employee asset |

    ![Create the configured hyperlink column](images/00-create-the-configured-hyperlink-column.png)

1. Copy each value from the **Image** column to the **Image URL** column. Select **Edit in grid view**.

    ![Select Edit in Grid View](images/00-select-edit-in-grid-view.png)

1. In the first row (the first item in the list), double-click the **Image** column and copy the value. Press the `Esc` key to exit editing.

    ![Open the image URL column editor](images/00-open-the-image-url-column-editor.png)

1. Double-click the corresponding **Image URL** column, paste the value in the **Link** field, then select the check mark icon to save.

    ![Paste value into image URL column](images/00-paste-value-into-image-url-column.png)

1. Repeat the same steps for the remaining three rows in the list.

1. Lastly, delete the Image `Single line of text` column. Select the column, then select **Column settings** followed by **Edit**.

    ![Edit the unwanted SharePoint column](images/00-edit-the-unwanted-sharepoint-column.png)

1. Select **Delete**.

    ![Select delete in column settings](images/00-select-delete-in-column-settings.png)

1. A confirmation dialog appears. Select **Delete** to confirm removing the column from the list.

    ![Confirm deletion of the SharePoint column](images/00-confirm-deletion-of-the-sharepoint-column.png)

## ✅ Mission Complete {#mission-complete}

You’ve successfully:

- Set up a Microsoft 365 development environment
- Created and populated a personal EmployeeAssets list on the shared SharePoint site

You're officially cleared to begin your **Recruit-level agent training** in [Lesson 01](../01-introduction-to-agents/index.md).  

<analytics-tag section="recruit-nextgen" mission="00-course-setup" />
