# Vanguard Fleet Management System — Command Dashboard Prototype

## What this package includes
- `vfms-dashboard.html`: a complete, self-contained Fleet Command dashboard.
- No installation or server is required for the prototype.
- Open the HTML file in a modern browser.

## Functional prototype features
- Dashboard metrics
- Personnel roster
- Editable Sovak personnel jacket
- Application approval and decline workflow
- Ship registry
- Academy course overview
- Decorations database
- Qualifications database
- Mission creation
- Fleet order creation
- Promotion, transfer, award and qualification actions
- Local audit log
- Browser localStorage persistence
- JSON export

## Important limitation
This is a front-end prototype. It does not yet provide secure authentication, multi-user access, a real database or server-side permissions. Those should be added with Supabase or another backend before using it as a live administrative system.

## Recommended repository placement
Place `vfms-dashboard.html` in the root of the Vanguard Fleet GitHub repository and link it from the public navigation only after access control exists. During development, keep it unlinked or use a separate development branch.
