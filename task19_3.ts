interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

type EssentialProduct = {
  readonly [Property in keyof Product]-?: Product[Property];
};
type ProductPreview = Pick<EssentialProduct, "id" | "name">;

type StringProperties<P> = {
  [K in keyof P as P[K] extends string ? K : never]: P[K];
};

type StringPropertiesOfProduct = StringProperties<Product>;
