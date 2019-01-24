module ApplicationHelper
  def render_haml(haml, locals = {})
    Haml::Engine.new(haml.strip_heredoc, format: :html5).render(self, locals)
  end

  def timeline_entry(image, time, title, content)
    render_haml <<-HAML, image: image, time: time, title: title, content: content
      .cd-timeline__block.js-cd-block
        .cd-timeline__img.cd-timeline__img--picture.js-cd-img
          %img{alt: time, src: "assets/#{image}"}/
        / cd-timeline__img
        .cd-timeline__content.collapsed.js-cd-content{style: "background: url('assets/#{image}') center no-repeat;background-size: cover"}
          .content-text
            %h2
              = title
            %p
              = I18n.t(content)
        %span.cd-timeline__date
          = time
      HAML
  end
end
