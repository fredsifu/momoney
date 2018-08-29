# Errors helper for views
module ErrorsHelper
  def err(obj, attr)
    if obj.errors[attr].empty?
      nil
    else
      obj.errors.full_messages_for(attr).join('; ')
    end
  end
end