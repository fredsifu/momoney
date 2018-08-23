# Helper to quicken icon references through Ruby code
module IconsHelper
  # General utilities
  def icon(prefix, names = 'flag', original_options = {})
    options = original_options.deep_dup
    classes = [prefix]
    classes.concat Private.icon_names(prefix, names)
    classes.concat Array(options.delete(:class))
    text = options.delete(:text)
    right_icon = options.delete(:right)
    icon = content_tag(:i, nil, options.merge(class: classes))
    Private.icon_join(icon, text, right_icon)
  end

  # Creates an icon tag given an icon name and possible icon
  # modifiers.
  #
  # Examples
  #
  #   fa_icon "camera-retro"
  #   # => <i class="fa fa-camera-retro"></i>
  #
  #   fa_icon "camera-retro", text: "Take a photo"
  #   # => <i class="fa fa-camera-retro"></i> Take a photo
  #   fa_icon "chevron-right", text: "Get started", right: true
  #   # => Get started <i class="fa fa-chevron-right"></i>
  #
  #   fa_icon "camera-retro 2x"
  #   # => <i class="fa fa-camera-retro fa-2x"></i>
  #   fa_icon ["camera-retro", "4x"]
  #   # => <i class="fa fa-camera-retro fa-4x"></i>
  #   fa_icon "spinner spin lg"
  #   # => <i class="fa fa-spinner fa-spin fa-lg">
  #
  #   fa_icon "quote-left 4x", class: "pull-left"
  #   # => <i class="fa fa-quote-left fa-4x pull-left"></i>
  #
  #   fa_icon "user", data: { id: 123 }
  #   # => <i class="fa fa-user" data-id="123"></i>
  #
  #   content_tag(:li, fa_icon("check li", text: "Bulleted list item"))
  #   # => <li><i class="fa fa-check fa-li"></i> Bulleted list item</li>
  def fa_icon(names = 'flag', original_options = {})
    options = original_options.deep_dup
    type = options.delete(:type) || 'fas' # defaults to font-awesome-solid (fas)
    classes = [type]
    classes.concat Private.icon_names('fa', names)
    classes.concat Array(options.delete(:class))
    text = options.delete(:text)
    right_icon = options.delete(:right)
    icon = content_tag(:i, nil, options.merge(:class => classes))
    Private.icon_join(icon, text, right_icon)
  end

  def fa_text_layer(text = 'text', original_options = {})
    options = original_options.deep_dup
    classes = ['fa-layers-text']
    content_tag :span, nil, options.merge(class: classes) do
      text
    end
  end

  def fa_counter_layer(the_count = 0, original_options = {})
    options = original_options.deep_dup
    classes = ['fa-layers-counter']
    content_tag :span, nil, options.merge(class: classes) do
      the_count.to_s
    end
  end

  # Usage for fa_layered_icons:
  #  fa_layered_icons style: 'background:Blue'
  #  # => "<span style=\"background:Blue\" class=\"fa-layers fa-fw\"></span>"

  #  Note that the block must return a single string to work, so concatenate the icons with +
  #  fa_layered_icons style: 'background:MistyRose' do
  #    fa_icon('circle', 'fas', data: { 'fa-transform' => 'grow-2' }) +
  #    fa_icon('inverse times', 'fas', style: 'background:red')
  #  end
  #  # => "<span style=\"background:MistyRose\" class=\"fa-layers fa-fw\"><i data-fa-transform=\"grow-2\" class=\"fas fa-circle\"></i><i style=\"background:red\" class=\"fas fa-inverse fa-times\"></i></span>"
  def fa_layered_icons(original_options = {}, &block)
    options = original_options.deep_dup
    classes = ['fa-layers', 'fa-fw']
    classes.concat Array(options.delete(:class))

    if block_given?
      content_tag :span, nil, options.merge(class: classes) do
        yield
      end
    else
      content_tag :span, nil, options.merge(class: classes)
    end
  end

  # Creates an stack set of icon tags given a base icon name, a main icon
  # name, and possible icon modifiers.
  #
  # Examples
  #
  #   fa_stacked_icon "twitter", base: "square-o"
  #   # => <span class="fa-stack">
  #   # =>   <i class="fa fa-square-o fa-stack-2x"></i>
  #   # =>   <i class="fa fa-twitter fa-stack-1x"></i>
  #   # => </span>
  #
  #   fa_stacked_icon "terminal inverse", base: "square", class: "pull-right", text: "Hi!"
  #   # => <span class="fa-stack pull-right">
  #   # =>   <i class="fa fa-square fa-stack-2x"></i>
  #   # =>   <i class="fa fa-terminal fa-inverse fa-stack-1x"></i>
  #   # => </span> Hi!
  #
  #   fa_stacked_icon "camera", base: "ban-circle", reverse: true
  #   # => <span class="fa-stack">
  #   # =>   <i class="fa fa-camera fa-stack-1x"></i>
  #   # =>   <i class="fa fa-ban-circle fa-stack-2x"></i>
  #   # => </span>
  def fa_stacked_icon(names = 'flag', original_options = {})
    options = original_options.deep_dup
    classes = Private.icon_names('stack').concat(Array(options.delete(:class)))
    base_names = Private.array_value(options.delete(:base) || 'square-o').push('stack-2x')
    names = Private.array_value(names).push('stack-1x')
    base = fa_icon(base_names, options.delete(:base_options) || {})
    icon = fa_icon(names, options.delete(:icon_options) || {})
    icons = [base, icon]
    icons.reverse! if options.delete(:reverse)
    text = options.delete(:text)
    right_icon = options.delete(:right)
    stacked_icon = content_tag(:span, safe_join(icons), options.merge(class: classes))
    Private.icon_join(stacked_icon, text, right_icon)
  end

  ##############################################################################
  # icofont helper gives : <%= icofont "swimmer" %>
  def icofont(names = 'flag', original_options = {})
    icon('icofont', names, original_options)
  end

  ##############################################################################
  # zmdi helper gives : <%= zmdi "swimmer" %>
  def zmdi(names = 'flag', original_options = {})
    icon('zmdi', names, original_options)
  end

  # Reused methods
  module Private
    extend ActionView::Helpers::OutputSafetyHelper

    def self.icon_join(icon, text, reverse_order = false)
      return icon if text.blank?
      elements = [icon, ERB::Util.html_escape(text)]
      elements.reverse! if reverse_order
      safe_join(elements, ' ')
    end

    def self.array_value(value = [])
      value.is_a?(Array) ? value : value.to_s.split(/\s+/)
    end

    def self.icon_names(prefix, names = [])
      array_value(names).map { |n| "#{prefix}-#{n}" }
    end
  end
end
