<div className="catalog-top">
  <div className="filters">
    <button
      onClick={() =>
        dispatch(
          filterByCategory("electronics")
        )
      }
    >
      💻 Electronics
    </button>

    <button
      onClick={() =>
        dispatch(
          filterByCategory(
            "men's clothing"
          )
        )
      }
    >
      👕 Men's
    </button>

    <button
      onClick={() =>
        dispatch(
          filterByCategory(
            "women's clothing"
          )
        )
      }
    >
      👗 Women's
    </button>

    <button
      onClick={() =>
        dispatch(
          filterByCategory(
            "jewelery"
          )
        )
      }
    >
      💍 Jewellery
    </button>

    <button
      onClick={() =>
        dispatch(filterByPrice(100))
      }
    >
      💲 Under $100
    </button>

    <button
      onClick={() =>
        dispatch(resetFilters())
      }
    >
      🔄 All Products
    </button>
  </div>
</div>