
function addProjectsListCollapse(){
  $("div#projects-index div.root, div#projects-index div.child").each(function(id, el) {
    $parent = $(el);
    $content1 = $parent.next("ul");
    $content2 = $parent.children(".description");

    if($content1.length || $content2.length) {
      if($parent.hasClass('root')) {
        $parent.prepend("<a href='#' class='expcolroot collapsible'></a>");
      } else {
        $content1.toggle();
        $content2.toggle();
        $parent.prepend("<a href='#' class='expcolroot collapsible collapsed'></a>");
      }
    } else {
      if(!$parent.hasClass('root')) {
        $parent.prepend("<a style='padding-left:12px;'></a>");
      }
    }
  });

  $("a.expcolroot").click(function(){
    $header = $(this);
    $header.toggleClass("collapsed")
    $content1 = $header.parent().next("ul");
    $content2 = $header.parent().children(".description");
    $content1.toggle();
    $content2.toggle();
  });
}

$(document).ready(addProjectsListCollapse);
