module RedminePluginWithAssets
  module Hooks

    class SubprojectHookListener < Redmine::Hook::ViewListener
      include ActionView::Helpers::TagHelper

      def view_layouts_base_html_head(context)
        javascript_include_tag(:application, :plugin => 'redmine_subproject_collapse')
      end
    end

  end
end
