module StaticHelper
  def reference_table(items)
    render "static/shared/reference_table", items: items, keys: items.attributes_builder.types.keys
  end
end
