create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  user_agent text,
  referrer text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.newsletter_signups enable row level security;

create index if not exists newsletter_signups_created_at_idx
  on public.newsletter_signups (created_at desc);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists newsletter_signups_set_updated_at
  on public.newsletter_signups;

create trigger newsletter_signups_set_updated_at
before update on public.newsletter_signups
for each row
execute function public.set_updated_at();
