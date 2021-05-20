create table products (
    id serial NOT NULL PRIMARY KEY,
    name varchar(150),
    stock integer,
    created_at timestamp with time zone,
    main_image varchar(150),
    value numeric
);

create table images (
    id serial NOT NULL PRIMARY KEY,
    name varchar(150),
    product_id integer constraint "FK_2759948c2407efe836806075f90" references products
);

create table orders (
    id serial NOT NULL PRIMARY KEY,
    name varchar(150),
    "productValue"  numeric,
    "productQuantity" integer,
    created_at timestamp with time zone
);

create table products_orders (
    id serial NOT NULL PRIMARY KEY,
    "productQuantity" integer,
    "productValue"    numeric,
    "productEntityId" integer constraint "FK_097d3d66a29f2cc6e1f1d505125" references products,
    "orderEntityId"   integer constraint "FK_8a20f86ff01182be101739e8da7" references orders
);

-- Insert products
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (4, 'Samsung Galaxy A10s Dual SIM 32 GB preto 2 GB RAM', 12, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Samsung_Galaxy_A10s/D_NQ_NP_645601-MLA45254673849_032021-O.webp', 855);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (11, 'Xiaomi Poco M3 Dual SIM 64 GB power black 4 GB RAM', 4, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_Poco_M3/D_NQ_NP_963776-MLA44706781750_012021-O.webp', 1205);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (12, 'Xiaomi Redmi 9C Dual SIM 64 GB midnight gray 3 GB RAM', 6, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_Redmi_Note_10/D_NQ_NP_767371-MLB45609810429_042021-O.webp', 990);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (13, 'Xiaomi Redmi Note 8 Dual SIM 64 GB space black 4 GB RAM', 6, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_Redmi_Note_8/D_NQ_NP_654642-MLA44528370852_012021-O.webp', 1369);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (3, 'LG K52 (13 Mpx) Dual SIM 64 GB green 3 GB RAM', 3, '2021-05-10 18:16:50.589000', 'http://localhost:4000/LG_K52/D_NQ_NP_996099-MLA45017083667_022021-O.webp', 1037);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (5, 'Samsung Galaxy A21s Dual SIM 64 GB preto 6 GB RAM', 10, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Samsung_Galaxy_A21s/D_NQ_NP_732981-MLA45347247613_032021-O.webp', 2001);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (7, 'Samsung Galaxy A52 Dual SIM 128 GB lilás 6 GB RAM', 7, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Samsung_Galaxy_A52/D_NQ_NP_973755-MLA46042090326_052021-O.webp', 2250);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (8, 'Nokia 2.3 32 GB sand 2 GB RAM', 12, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Smartphone_Nokia/D_NQ_NP_750621-MLB45626866203_042021-O.webp', 798);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (6, 'Samsung Galaxy A32 Dual SIM 128 GB preto 4 GB RAM', 6, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Samsung_Galaxy_A32/D_NQ_NP_778579-MLA45668418800_042021-O.webp', 1640);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (14, 'Xiaomi Redmi Note 10 64gb 4gb Ram Global + Nota Fiscal', 7, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_Redmi_Note_10/D_NQ_NP_767371-MLB45609810429_042021-O.webp', 1599);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (9, 'Xiaomi 9A Dual SIM 32 GB cinza 2 GB RAM', 4, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_9A/D_NQ_NP_2X_958898-MLA43824398273_102020-F.webp', 790);
INSERT INTO public.products (id, name, stock, created_at, main_image, value) VALUES (10, 'Xiaomi Note 9 Dual SIM 64 GB cinza-meia-noite 3 GB RAM', 4, '2021-05-10 18:16:50.589000', 'http://localhost:4000/Xiaomi_Note_9/D_NQ_NP_745061-MLA45883000856_052021-O.webp', 1332);

-- Insert images
INSERT INTO public.images (id, name, product_id) VALUES (4, 'LG_K52/D_NQ_NP_978194-MLA45017083668_022021-O.webp', 3);
INSERT INTO public.images (id, name, product_id) VALUES (1, 'LG_K52/D_NQ_NP_717272-MLA45016934990_022021-O.webp', 3);
INSERT INTO public.images (id, name, product_id) VALUES (5, 'LG_K52/D_NQ_NP_996099-MLA45017083667_022021-O.webp', 3);
INSERT INTO public.images (id, name, product_id) VALUES (2, 'LG_K52/D_NQ_NP_764271-MLA45017083669_022021-O.webp', 3);
INSERT INTO public.images (id, name, product_id) VALUES (3, 'LG_K52/D_NQ_NP_930824-MLA45017083670_022021-O.webp', 3);
INSERT INTO public.images (id, name, product_id) VALUES (9, 'Samsung_Galaxy_A21s/D_NQ_NP_939267-MLA45347321569_032021-O.webp', 5);
INSERT INTO public.images (id, name, product_id) VALUES (8, 'Samsung_Galaxy_A21s/D_NQ_NP_932581-MLA45347247614_032021-O.webp', 5);
INSERT INTO public.images (id, name, product_id) VALUES (52, 'Xiaomi_Redmi_Note_10/D_NQ_NP_767371-MLB45609810429_042021-O.webp', 14);
INSERT INTO public.images (id, name, product_id) VALUES (36, 'Xiaomi_Poco_M3/D_NQ_NP_779513-MLA44706781752_012021-O.webp', 11);
INSERT INTO public.images (id, name, product_id) VALUES (24, 'Smartphone_Nokia/D_NQ_NP_752872-MLB45626866202_042021-O.webp', 8);
INSERT INTO public.images (id, name, product_id) VALUES (25, 'Smartphone_Nokia/D_NQ_NP_878575-MLB45626866204_042021-O.webp', 8);
INSERT INTO public.images (id, name, product_id) VALUES (49, 'Xiaomi_Redmi_Note_10/D_NQ_NP_887363-MLB45609806635_042021-O.webp', 14);
INSERT INTO public.images (id, name, product_id) VALUES (31, 'Xiaomi_Note_9/D_NQ_NP_705075-MLA45883011819_052021-O.webp', 10);
INSERT INTO public.images (id, name, product_id) VALUES (30, 'Xiaomi_Note_9/D_NQ_NP_600793-MLA45883229137_052021-O.webp', 10);
INSERT INTO public.images (id, name, product_id) VALUES (23, 'Smartphone_Nokia/D_NQ_NP_750621-MLB45626866203_042021-O.webp', 8);
INSERT INTO public.images (id, name, product_id) VALUES (35, 'Xiaomi_Poco_M3/D_NQ_NP_687109-MLA44706781751_012021-O.webp', 11);
INSERT INTO public.images (id, name, product_id) VALUES (34, 'Xiaomi_Poco_M3/D_NQ_NP_615340-MLA44706781755_012021-O.webp', 11);
INSERT INTO public.images (id, name, product_id) VALUES (47, 'Xiaomi_Redmi_Note_8/D_NQ_NP_908588-MLA44528370854_012021-O.webp', 13);
INSERT INTO public.images (id, name, product_id) VALUES (32, 'Xiaomi_Note_9/D_NQ_NP_736949-MLA45883229140_052021-O.webp', 10);
INSERT INTO public.images (id, name, product_id) VALUES (53, 'Xiaomi_Redmi_Note_10/D_NQ_NP_797292-MLB45467667406_042021-O.webp', 14);
INSERT INTO public.images (id, name, product_id) VALUES (16, 'Samsung_Galaxy_A52/D_NQ_NP_601036-MLA46041962868_052021-O.webp', 7);
INSERT INTO public.images (id, name, product_id) VALUES (37, 'Xiaomi_Poco_M3/D_NQ_NP_963776-MLA44706781750_012021-O.webp', 11);
INSERT INTO public.images (id, name, product_id) VALUES (27, 'Xiaomi_9A/D_NQ_NP_619521-MLA43824398275_102020-O.webp', 9);
INSERT INTO public.images (id, name, product_id) VALUES (26, 'Xiaomi_9A/D_NQ_NP_2X_958898-MLA43824398273_102020-F.webp', 9);
INSERT INTO public.images (id, name, product_id) VALUES (29, 'Xiaomi_9A/D_NQ_NP_855671-MLA43824398274_102020-O.webp', 9);
INSERT INTO public.images (id, name, product_id) VALUES (28, 'Xiaomi_9A/D_NQ_NP_642278-MLA43824416217_102020-O.webp', 9);
INSERT INTO public.images (id, name, product_id) VALUES (48, 'Xiaomi_Redmi_Note_8/D_NQ_NP_911751-MLA44528370853_012021-O.webp', 13);
INSERT INTO public.images (id, name, product_id) VALUES (46, 'Xiaomi_Redmi_Note_8/D_NQ_NP_908067-MLA44528370856_012021-O.webp', 13);
INSERT INTO public.images (id, name, product_id) VALUES (44, 'Xiaomi_Redmi_Note_8/D_NQ_NP_654642-MLA44528370852_012021-O.webp', 13);
INSERT INTO public.images (id, name, product_id) VALUES (22, 'Smartphone_Nokia/D_NQ_NP_640179-MLB45626866205_042021-O.webp', 8);
INSERT INTO public.images (id, name, product_id) VALUES (50, 'Xiaomi_Redmi_Note_10/D_NQ_NP_676455-MLB45467668455_042021-O.webp', 14);
INSERT INTO public.images (id, name, product_id) VALUES (6, 'Samsung_Galaxy_A21s/D_NQ_NP_732981-MLA45347247613_032021-O.webp', 5);
INSERT INTO public.images (id, name, product_id) VALUES (33, 'Xiaomi_Note_9/D_NQ_NP_745061-MLA45883000856_052021-O.webp', 10);
INSERT INTO public.images (id, name, product_id) VALUES (12, 'Samsung_Galaxy_A32/D_NQ_NP_715033-MLA45668850166_042021-O.webp', 6);
INSERT INTO public.images (id, name, product_id) VALUES (38, 'Xiaomi_Poco_M3/D_NQ_NP_967548-MLA44706781753_012021-O.webp', 11);
INSERT INTO public.images (id, name, product_id) VALUES (40, 'Xiaomi_Redmi_9C/D_NQ_NP_690637-MLA44515522383_012021-O.webp', 12);
INSERT INTO public.images (id, name, product_id) VALUES (41, 'Xiaomi_Redmi_9C/D_NQ_NP_802717-MLA44515519457_012021-O.webp', 12);
INSERT INTO public.images (id, name, product_id) VALUES (42, 'Xiaomi_Redmi_9C/D_NQ_NP_823791-MLA44515519458_012021-O.webp', 12);
INSERT INTO public.images (id, name, product_id) VALUES (43, 'Xiaomi_Redmi_9C/D_NQ_NP_960527-MLA44515522381_012021-O.webp', 12);
INSERT INTO public.images (id, name, product_id) VALUES (45, 'Xiaomi_Redmi_Note_8/D_NQ_NP_864177-MLA44528370855_012021-O.webp', 13);
INSERT INTO public.images (id, name, product_id) VALUES (11, 'Samsung_Galaxy_A32/D_NQ_NP_714471-MLA45668418801_042021-O.webp', 6);
INSERT INTO public.images (id, name, product_id) VALUES (39, 'Xiaomi_Redmi_9C/D_NQ_NP_607281-MLA44515519459_012021-O.webp', 12);
INSERT INTO public.images (id, name, product_id) VALUES (15, 'Samsung_Galaxy_A32/D_NQ_NP_813545-MLA45668850165_042021-O.webp', 6);
INSERT INTO public.images (id, name, product_id) VALUES (14, 'Samsung_Galaxy_A32/D_NQ_NP_778579-MLA45668418800_042021-O.webp', 6);
INSERT INTO public.images (id, name, product_id) VALUES (13, 'Samsung_Galaxy_A32/D_NQ_NP_739145-MLA45668850167_042021-O.webp', 6);
INSERT INTO public.images (id, name, product_id) VALUES (19, 'Samsung_Galaxy_A52/D_NQ_NP_959559-MLA46042090329_052021-O.webp', 7);
INSERT INTO public.images (id, name, product_id) VALUES (18, 'Samsung_Galaxy_A52/D_NQ_NP_715968-MLA46041962863_052021-O.webp', 7);
INSERT INTO public.images (id, name, product_id) VALUES (17, 'Samsung_Galaxy_A52/D_NQ_NP_712862-MLA46042187128_052021-O.webp', 7);
INSERT INTO public.images (id, name, product_id) VALUES (21, 'Smartphone_Nokia/D_NQ_NP_628327-MLB45626866206_042021-O.webp', 8);
INSERT INTO public.images (id, name, product_id) VALUES (7, 'Samsung_Galaxy_A21s/D_NQ_NP_857619-MLA45346954944_032021-O.webp', 5);
INSERT INTO public.images (id, name, product_id) VALUES (51, 'Xiaomi_Redmi_Note_10/D_NQ_NP_744043-MLB45467899960_042021-O.webp', 14);
INSERT INTO public.images (id, name, product_id) VALUES (20, 'Samsung_Galaxy_A52/D_NQ_NP_973755-MLA46042090326_052021-O.webp', 7);
INSERT INTO public.images (id, name, product_id) VALUES (10, 'Samsung_Galaxy_A21s/D_NQ_NP_997466-MLA45347321570_032021-O.webp', 5);
INSERT INTO public.images (id, name, product_id) VALUES (54, 'Samsung_Galaxy_A10s/D_NQ_NP_645601-MLA45254673849_032021-O.webp', 4);
INSERT INTO public.images (id, name, product_id) VALUES (55, 'Samsung_Galaxy_A10s/D_NQ_NP_861317-MLA45254874304_032021-O.webp', 4);
INSERT INTO public.images (id, name, product_id) VALUES (56, 'Samsung_Galaxy_A10s/D_NQ_NP_866841-MLA45254673854_032021-O.webp', 4);
INSERT INTO public.images (id, name, product_id) VALUES (57, 'Samsung_Galaxy_A10s/D_NQ_NP_933670-MLA45254673852_032021-O.webp', 4);
