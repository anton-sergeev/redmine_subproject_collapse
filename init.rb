# encoding: utf-8
require_dependency 'subproject_hook_listener'

Redmine::Plugin.register :redmine_subproject_collapse do
  name 'Sub Projects Collapse Plugin'
  author 'Anton Sergeev'
  description 'This plugin provides ability to collapse sub projects'
  version '0.0.1'
  url 'https://github.com/anton-sergeev/redmine_subproject_collapse'
  author_url 'https://github.com/anton-sergeev'
end
