module ApplicationHelper
  # Quick way to automate pretty page titles.
  def view_title(page_title)
    content_for(:title) { page_title }
  end

  # Quick way to highlight active navigation bar areas.
  def is_active?(controller_action)
    "#{params[:controller]}\##{params[:action]}" == controller_action ? "active" : nil
  end
end
