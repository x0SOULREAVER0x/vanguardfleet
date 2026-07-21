# VFMS Supabase Backend Starter

This package is the next development phase for Vanguard Fleet. It supplies a real PostgreSQL database, Supabase authentication, role-based Row Level Security, a login page and a member VPIN portal.

## Files

- `supabase-schema.sql` — database tables, initial catalog data and security policies
- `config.js` — browser-safe Supabase project configuration placeholders
- `login.html` — email/password account creation and login
- `portal.html` — authenticated member VPIN portal

## Setup

1. Create a new Supabase project.
2. Open **SQL Editor**, paste the entire contents of `supabase-schema.sql` and run it.
3. In **Project Settings → API**, copy the Project URL and publishable/anon key.
4. Put those values into `config.js`.
5. Upload `login.html`, `portal.html` and `config.js` to the same directory in the GitHub repository.
6. Visit `login.html`, create your owner account and confirm the email if email confirmation is enabled.
7. In Supabase **Authentication → Users**, copy your user UUID.
8. Run this once in the SQL Editor:

```sql
update public.profiles
set role = 'admin'
where id = 'YOUR-AUTH-USER-UUID';
```

9. Add a personnel record and link `user_id` to your account. A sample command is below.

```sql
insert into public.personnel (
  user_id, service_number, character_name, species, homeworld,
  rank_name, division, department, billet, ship_id
)
select
  'YOUR-AUTH-USER-UUID',
  'VF-2403-001',
  'Sovak',
  'Vulcan',
  'Vulcan',
  'Lieutenant Junior Grade',
  'Medical',
  'Medical',
  'Medical Officer',
  id
from public.ships
where name = 'USS Discovery';
```

## Security

The public browser files use only the publishable/anon key. Access is enforced by PostgreSQL Row Level Security. Never put a `service_role` key in GitHub, HTML, JavaScript or any browser-delivered file.

Members can read their own personnel and service records. Command and admin accounts can read and manage fleet records. Only admins can change another user's VFMS role under the supplied policies.

## Next integration

The existing Fleet Command dashboard should next be converted from browser `localStorage` to these Supabase tables. This starter deliberately establishes authentication and data security before connecting command write actions.
