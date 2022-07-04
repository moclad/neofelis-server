SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.account_info (
    id bigint NOT NULL,
    type character(1) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text
);
CREATE SEQUENCE public.account_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.account_info_id_seq OWNED BY public.account_info.id;
CREATE TABLE public.accounts (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "userId" uuid NOT NULL,
    type character varying NOT NULL,
    provider character varying NOT NULL,
    "providerAccountId" character varying NOT NULL,
    refresh_token character varying,
    access_token character varying,
    expires_at bigint,
    token_type character varying,
    scope character varying,
    id_token character varying,
    session_state character varying
);
CREATE TABLE public.assets (
    id bigint NOT NULL,
    active boolean DEFAULT true NOT NULL,
    account_no text,
    balance double precision,
    balance_date date,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    "default" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.categories (
    id bigint NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT true NOT NULL
);
CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
CREATE TABLE public.expenses (
    id bigint NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.labels (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.labels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.labels_id_seq OWNED BY public.labels.id;
CREATE TABLE public.liabilities (
    id bigint NOT NULL,
    name text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.notifications (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    user_id uuid NOT NULL,
    read_status boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.notifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;
CREATE TABLE public.recurring (
    id bigint NOT NULL,
    title text NOT NULL,
    amount double precision NOT NULL,
    start_on date NOT NULL,
    cycle_type integer NOT NULL,
    duration_type integer NOT NULL,
    transaction_type integer NOT NULL,
    account_from bigint NOT NULL,
    account_to bigint NOT NULL,
    category_id bigint,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    until_date date,
    no_of_times integer,
    CONSTRAINT cycle_type_constrain CHECK (((cycle_type >= 1) AND (cycle_type <= 4))),
    CONSTRAINT duration_type_constrain CHECK (((duration_type >= 1) AND (duration_type <= 3))),
    CONSTRAINT transaction_type_constrain CHECK (((transaction_type >= 1) AND (transaction_type <= 3)))
);
CREATE SEQUENCE public.recurring_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.recurring_id_seq OWNED BY public.recurring.id;
CREATE TABLE public.recurring_labels (
    recurring_id bigint NOT NULL,
    label_id integer NOT NULL
);
CREATE TABLE public.revenues (
    id bigint NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "default" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.sessions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "sessionToken" character varying NOT NULL,
    "userId" uuid NOT NULL,
    expires character varying NOT NULL
);
CREATE TABLE public.transaction_accounts (
    id bigint NOT NULL,
    account_id integer NOT NULL,
    amount double precision NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    transaction_id bigint NOT NULL
);
CREATE TABLE public.transaction_attachments (
    transaction_id bigint NOT NULL,
    attachment_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    description text NOT NULL
);
CREATE SEQUENCE public.transaction_attachments_attachment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.transaction_attachments_attachment_id_seq OWNED BY public.transaction_attachments.attachment_id;
CREATE TABLE public.transaction_labels (
    transaction_id bigint NOT NULL,
    label_id integer NOT NULL
);
CREATE TABLE public.transactions (
    id bigint NOT NULL,
    description text,
    amount double precision NOT NULL,
    category_id bigint,
    transaction_date date NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    recurring_id bigint
);
ALTER TABLE public.transactions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.transactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
CREATE SEQUENCE public.transcation_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.transcation_account_id_seq OWNED BY public.transaction_accounts.id;
CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);
CREATE TABLE public.user_settings (
    user_id uuid NOT NULL,
    "langKey" text DEFAULT 'en'::text NOT NULL,
    "darkMode" boolean DEFAULT true NOT NULL
);
CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying,
    email character varying,
    "emailVerified" character varying,
    image character varying
);
CREATE TABLE public.verification_tokens (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    token character varying NOT NULL,
    identifier character varying NOT NULL,
    expires character varying NOT NULL
);
ALTER TABLE ONLY public.account_info ALTER COLUMN id SET DEFAULT nextval('public.account_info_id_seq'::regclass);
ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
ALTER TABLE ONLY public.labels ALTER COLUMN id SET DEFAULT nextval('public.labels_id_seq'::regclass);
ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);
ALTER TABLE ONLY public.recurring ALTER COLUMN id SET DEFAULT nextval('public.recurring_id_seq'::regclass);
ALTER TABLE ONLY public.transaction_accounts ALTER COLUMN id SET DEFAULT nextval('public.transcation_account_id_seq'::regclass);
ALTER TABLE ONLY public.transaction_attachments ALTER COLUMN attachment_id SET DEFAULT nextval('public.transaction_attachments_attachment_id_seq'::regclass);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY (id);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
ALTER TABLE ONLY public.verification_tokens
    ADD CONSTRAINT "PK_f2d4d7a2aa57ef199e61567db22" PRIMARY KEY (id);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "UQ_8b5e2ec52e335c0fe16d7ec3584" UNIQUE ("sessionToken");
ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
ALTER TABLE ONLY public.account_info
    ADD CONSTRAINT account_info_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.assets
    ADD CONSTRAINT assets_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.liabilities
    ADD CONSTRAINT liabiulities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.recurring_labels
    ADD CONSTRAINT recurring_labels_pkey PRIMARY KEY (recurring_id, label_id);
ALTER TABLE ONLY public.recurring
    ADD CONSTRAINT recurring_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.revenues
    ADD CONSTRAINT revenues_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.transaction_attachments
    ADD CONSTRAINT transaction_attachments_attachment_id_key UNIQUE (attachment_id);
ALTER TABLE ONLY public.transaction_attachments
    ADD CONSTRAINT transaction_attachments_pkey PRIMARY KEY (transaction_id, attachment_id);
ALTER TABLE ONLY public.transaction_attachments
    ADD CONSTRAINT transaction_attachments_transaction_id_key UNIQUE (transaction_id);
ALTER TABLE ONLY public.transaction_labels
    ADD CONSTRAINT transaction_labels_pkey PRIMARY KEY (transaction_id, label_id);
ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.transaction_accounts
    ADD CONSTRAINT transcation_account_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_pkey PRIMARY KEY (user_id);
CREATE TRIGGER set_public_account_info_updated_at BEFORE UPDATE ON public.account_info FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_account_info_updated_at ON public.account_info IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_assets_updated_at BEFORE UPDATE ON public.assets FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_assets_updated_at ON public.assets IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_categories_updated_at ON public.categories IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_expenses_updated_at BEFORE UPDATE ON public.expenses FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_expenses_updated_at ON public.expenses IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_labels_updated_at BEFORE UPDATE ON public.labels FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_labels_updated_at ON public.labels IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_liabiulities_updated_at BEFORE UPDATE ON public.liabilities FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_liabiulities_updated_at ON public.liabilities IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_notifications_updated_at BEFORE UPDATE ON public.notifications FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_notifications_updated_at ON public.notifications IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_recurring_updated_at BEFORE UPDATE ON public.recurring FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_recurring_updated_at ON public.recurring IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_revenues_updated_at BEFORE UPDATE ON public.revenues FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_revenues_updated_at ON public.revenues IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_transaction_attachments_updated_at BEFORE UPDATE ON public.transaction_attachments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_transaction_attachments_updated_at ON public.transaction_attachments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_transactions_updated_at BEFORE UPDATE ON public.transactions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_transactions_updated_at ON public.transactions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_transcation_account_updated_at BEFORE UPDATE ON public.transaction_accounts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_transcation_account_updated_at ON public.transaction_accounts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6" FOREIGN KEY ("userId") REFERENCES public.users(id);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES public.users(id);
ALTER TABLE ONLY public.assets
    ADD CONSTRAINT assets_id_fkey FOREIGN KEY (id) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_id_fkey FOREIGN KEY (id) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.liabilities
    ADD CONSTRAINT liabiulities_id_fkey FOREIGN KEY (id) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.recurring
    ADD CONSTRAINT recurring_account_from_fkey FOREIGN KEY (account_from) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.recurring
    ADD CONSTRAINT recurring_account_to_fkey FOREIGN KEY (account_to) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.recurring
    ADD CONSTRAINT recurring_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.recurring_labels
    ADD CONSTRAINT recurring_labels_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.labels(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.recurring_labels
    ADD CONSTRAINT recurring_labels_recurring_id_fkey FOREIGN KEY (recurring_id) REFERENCES public.recurring(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.revenues
    ADD CONSTRAINT revenues_id_fkey FOREIGN KEY (id) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.transaction_accounts
    ADD CONSTRAINT transaction_accounts_transaction_id_fkey FOREIGN KEY (transaction_id) REFERENCES public.transactions(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transaction_attachments
    ADD CONSTRAINT transaction_attachments_transaction_id_fkey FOREIGN KEY (transaction_id) REFERENCES public.transactions(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transaction_labels
    ADD CONSTRAINT transaction_labels_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.labels(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transaction_labels
    ADD CONSTRAINT transaction_labels_transaction_id_fkey FOREIGN KEY (transaction_id) REFERENCES public.transactions(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_recurring_id_fkey FOREIGN KEY (recurring_id) REFERENCES public.recurring(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transaction_accounts
    ADD CONSTRAINT transcation_account_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account_info(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
