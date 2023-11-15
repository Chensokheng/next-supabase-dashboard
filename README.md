![Add a heading (13)](https://github.com/Chensokheng/next-supabase-dashboard/assets/52232579/8ffea2ac-0200-4bed-b87c-77d162d07b9e)


## Getting Started

First, install the dependencies

```bash
npm i
```
then run the development server:


```bash
npm run dev
```

## Check list
-   [ ] setup supbase fill env.sample
-   [ ] create developer user
-   [ ] handle create user using service role
-   [ ] Prevent UI from none admin
-   [ ] update create user for only admin to create only
-   [ ] read user
-   [ ] update user
-   [ ] delete user

## Tables

```sh
permission_table:{
    id: uuid,
    role: text,
    status: text, (active,resigned),
    created_at: date,
    member_id: uuid
}
```

```sh
member_table:{
    id: uuid,
    name: text,
    created_at: date,
}
```

```sh
todo_table:{
    id: uuid,
    title: text,
    completed: boolean,
    created_at: date,
    created_by: uuid (foreign_key member_id)
}
```
