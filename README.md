# Entities 
## product
product_id
name

## category
category_id
product_id (which product it belongs to)
name

## ticket
ticket_id
product_id (which product the call is about)
category_id (the intent/complaint type)
subject
body
status (open / in_progress / resolved)
priority (low / medium / high / urgent)
created_at (call time)
