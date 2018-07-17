# news-images-with-text-overlays

## Tutorial		  
For detailed instruction's, view Solodev's [How to Create Image Boxes with Text Overlays](https://www.solodev.com/blog/web-design/how-to-create-image-boxes-with-text-overlays.stml) article.
 
## Demo
  		  
Try out a working example on [JSFiddle](http://jsfiddle.net/solodev/eus2hd0g/).

## HTML

The tutorial contains the following basic HTML markup.

```
<div class="section4 newsroom">
	<div class="container">
		<h2 class="text-center display-3 my-5">Solodev News</h2>
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-3">
				<div class="thumbnail" onclick="location.href='#'">
				  <div class="overlay">
					<div class="overlay-inner">
					  <a href="#"><h4 class="news-title">Solodev ranked high on G2 crowd</h4></a>
					  <a href="#"><h4 class="title-hover">Solodev Ranked as High Performer on G2 Crowd Spring List</h4></a>  
					</div>
				  </div>
					<img alt="" class="img-responsive cover" src="https://raw.githubusercontent.com/solodev/news-images-with-text-overlays/master/image-02.jpg" />
				</div>
			</div>
			
			<div class="col-xs-6 col-sm-6 col-md-3">
				<div class="thumbnail" onclick="location.href='#'">
				  <div class="overlay">
					<div class="overlay-inner">
					  <a href="#"><h4 class="news-title">Solodev launches new website</h4></a>
					  <a href="#"><h4 class="title-hover">Solodev Launches an Enticing Website to Match Vibrant City</h4></a>  
					</div>
				  </div>
					<img alt="" class="img-responsive cover" src="https://raw.githubusercontent.com/solodev/news-images-with-text-overlays/master/image-01.jpg" />
				</div>
			</div>
			
			<div class="col-xs-6 col-sm-6 col-md-3">
				<div class="thumbnail" onclick="location.href='#'">
				  <div class="overlay">
					<div class="overlay-inner">
					  <a href="#"><h4 class="news-title">Solodev earns national recognition</h4></a>
					  <a href="#"><h4 class="title-hover">Solodev Earns National Recognition as Marketing and Commerce CMS Leader</h4></a>  
					</div>
				  </div>
					<img alt="" class="img-responsive cover" src="https://raw.githubusercontent.com/solodev/news-images-with-text-overlays/master/image-03.jpg" />
				</div>
			</div>
			
			<div class="col-xs-6 col-sm-6 col-md-3">
				<div class="thumbnail" onclick="location.href='#'">
				  <div class="overlay">
					<div class="overlay-inner">
					  <a href="#"><h4 class="news-title">Solodev helps websites handle traffic surges</h4></a>
					  <a href="#"><h4 class="title-hover">Solodev helps websites to prep for website traffic surges</h4></a>  
					</div>
				  </div>
					<img alt="" class="img-responsive cover" src="https://raw.githubusercontent.com/solodev/news-images-with-text-overlays/master/image-04.jpg" />
				</div>
			</div>			  
		</div>
		<!--close row-->
		<p class="text-center"><a href="#" class="btn btn-danger rounded-0 text-white">All News Articles</a></p>
	</div>
</div>              
```

## CSS

All required CSS is contained with style.css

## JS

All required JS is contained with main.js

## External Resources

This tutorial includes the following third party resources.

```
<link href="http://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<script src="http://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="http://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
```


