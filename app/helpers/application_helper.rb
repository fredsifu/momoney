module ApplicationHelper
  def controller_model_name(count = 1)
    controller_name.classify.constantize.model_name.human(count: count)
  end

  def shallow_args(parent, child)
    child.new_record? ? [parent, child] : child
  end
end
