# Energy Support Ticket Manager - Frontend Learning In Progress

Ticket management system for energy companies to organize, prioritize, and resolve customer support requests efficiently. The goal is to train in frontend UI development and state management (using **Angular**)

## Overview

The Energy Support Ticket Manager streamlines customer support operations by providing a centralized platform for managing support tickets across multiple energy products. It enables support teams to categorize issues, track resolution progress, and prioritize urgent cases.


## Features

- **Multi-Product Support** - Manage tickets across different energy products
- **Intelligent Categorization** - Organize tickets by complaint type and intent
- **Priority Management** - Track tickets by priority levels (low, medium, high, urgent)
- **Status Tracking** - Monitor ticket lifecycle (open → in progress → resolved)


## Database Schema

### Products
Represents energy products offered by your company.

| Field | Type | Description |
|-------|------|-------------|
| `product_id` | ID | Unique product identifier |
| `name` | String | Product name |

### Categories
Issue categories tied to specific products.

| Field | Type | Description |
|-------|------|-------------|
| `category_id` | ID | Unique category identifier |
| `product_id` | FK | Associated product |
| `name` | String | Category name (e.g., billing, outage, technical issue) |

### Tickets
Support tickets submitted by customers.

| Field | Type | Description |
|-------|------|-------------|
| `ticket_id` | ID | Unique ticket identifier |
| `product_id` | FK | Product the ticket relates to |
| `category_id` | FK | Issue category/complaint type |
| `subject` | String | Ticket subject/title |
| `body` | String | Detailed description of the issue |
| `status` | Enum | `open` / `in_progress` / `resolved` |
| `priority` | Enum | `low` / `medium` / `high` / `urgent` |
| `created_at` | Timestamp | When the ticket was created |


