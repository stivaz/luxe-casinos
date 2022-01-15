var articleSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"#articleType\",\n' +
    '   \"mainEntityOfPage\": {\n' +
    '      \"@type\": \"WebPage\",\n' +
    '      \"@id": "https://google.com/article\"\n' +
    '},\n' +
    '   \"headline\": \"#Headline\",\n' +
    '   \"image\": [\n' +
    '       \"#img1url\",\n' +
    '       \"#img2url\",\n' +
    '       \"#img3url\"\n' +
    '],\n' +
    '   \"datePublished": "#datepub\",\n' +
    '   \"dateModified": "#dateUpdate\",\n'  +
    '   \"author\": {\n' +
    '       \"@type\": \"#TypeSP\",\n' +
    '       \"name\": \"#AuthorName\"\n' +
    '},\n' +
    '   \"publisher\": {\n' +
    '      \"@type\": \"#TypeSP",\n' +
    '      \"name\": \"#lbBusiName\",\n' +
    '      \"logo\": {\n' +
    '      \"@type\": \"ImageObject\",\n' +
    '      \"url\": \"#lblogoUrl\"\n' +
    '   }\n' +
    '},\n' +
    '   \"description\": \"#ArtDescript\"\n' +
    '}\n' +
    '</script>';



var lbSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"#selectedlbType\",\n' +
    '   \"name\":\"#lbBusiName\",\n' +
    '   \"image\":\"#lblogoUrl\",\n' +
    '   \"@id\":\"#lbsiteIDUrl\",\n' +
    '   \"url\":\"#lbsiteUrl\",\n' +
    '   \"telephone\":\"#lbTel\",\n' +
    '   \"priceRange\":\"#lbpricerange\",\n' +
    '   \"address\": {\n' +
    '      \"@type\": \"PostalAddress\",\n' +
    '      \"streetAddress\":\"#lbstAddress\",\n' +
    '      \"addressLocality\":\"#lbCity\",\n' +
    '      \"addressRegion\":\"#lbRegion\",\n' +
    '      \"postalCode\":\"#lbZip\",\n' +
    '      \"addressCountry\":\"#selectedCountry\"\n' +
    '   },\n' +
    '   \"openingHoursSpecification\": [\n'+
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Monday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgMonOpen\",\n' +
    '         \"closes\":\"#orgMonClose\"\n' +
    '      },\n' +
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Tuesday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgTueOpen\",\n' +
    '         \"closes\":\"#orgTueClose\"\n' +
    '      },\n' +
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Wednesday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgWedOpen\",\n' +
    '         \"closes\":\"#orgWedClose\"\n' +
    '      },\n' +
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Thursday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgThuOpen\",\n' +
    '         \"closes\":\"#orgThuClose\"\n' +
    '      },\n' +
   '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Friday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgFriOpen\",\n' +
    '         \"closes\":\"#orgFriClose\"\n' +
    '      },\n' +
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Saturday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgSatOpen\",\n' +
    '         \"closes\":\"#orgSatClose\"\n' +
    '      },\n' +
    '       {\n' +
    '         \"@type\": \"OpeningHoursSpecification\",\n' +
    '        \"dayOfWeek\":\[\n' +
    '              \"Sunday\"\n' +
    '          ],\n'+
    '         \"opens\":\"#orgSunOpen\",\n' +
    '         \"closes\":\"#orgSunClose\"\n' +
    '      }\n' +
    '   ]\n' +
    '}\n' +
    '</script>';

//Organization 
var orgSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Organization\",\n' +
    '   \"image\":\"#lbsiteUrl\",\n' +
    '   \"contactPoint\": [\n'+
    '       {\n' +
    '           \"@type\":\"ContactPoint\",\n' +
    '           \"telephone\":\"#lbTel\",\n' +
    '           \"contactType\":\"#contactType\"\n' +
    '       }\n' +
    '   ]\n' +
    '}\n' +
    '</script>';

//Product
var PRDSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Product\",\n' +
    '   \"name\":\"#prdName\",\n' +
    '   \"image\": [\n'+
    '       \"#prdImageUrl\"\n' +
    '     ],\n'+
    '   \"description\":\"#prdDescription\",\n' +
    '   \"url\":\"#prdURL\",\n' +
    '   \"sku\":\"#prdMPN\",\n' +
    '   \"mpn\":\"#prdMPN\",\n' +
    '   \"brand\": {\n'+
    '       \"@type\":\"Thing\",\n' +
    '       \"name\":\"#prdBrand\"\n' +
    '     },\n'+
    '   \"offers\": {\n'+
    '       \"@type\":\"Offer\",\n' +
    '       \"priceCurrency\":\"#prdPriceCurrency\",\n' +
    '       \"price\":\"#prdPrice\",\n' +
    '       \"priceValidUntil\":\"#prodpricecevaliduntil\",\n' +
    '       \"url\":\"#prdURL\",\n' +
    '       \"availability\":\"https://schema.org/#availability\"\n' +
    '     },\n'+
    '   \"aggregateRating\": {\n'+
    '       \"@type\": \"AggregateRating\",\n' +
    '       \"ratingValue\":\"#AggRatValue\",\n' +
    '       \"reviewCount\":\"#AggRatCount\"\n' +
    '     },\n'+
    '   \"review\": {\n'+
    '       \"@type\":\"Review\",\n' +
    '       \"author\" :{\n'+
    '           \"@type\":\"#TypeSP\",\n' +
    '           \"name":\"#AuthorName\"\n' +
    '       },\n'+
    '       \"reviewRating\": {\n'+
    '           \"@type": "Rating\",\n' +
    '           \"ratingValue\":\"#ratinggiven\"\n'+
    '         },\n'+    
    '       \"reviewBody\":\"#ReviewBody\"\n' +
    '     }\n'+
    '}\n' +
    '</script>';

//Book
var BOOKSchemaMarkup = 
'<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Book\",\n' +
    '   \"name\":\"#prdName\",\n' +
    '   \"author\" :{\n'+
    '       \"@type":"Person",\n' +
    '       \"name":\"#AuthorName\"\n' +
    '     },\n'+
    '   \"url\":\"#bookUrl\",\n' +
    '   \"workExample\": [{\n'+
    '       \"@type\":\"Book\",\n' +
    '       \"isbn\":\"#bookISBN\",\n' +
    '       \"bookEdition\":\"#bookEdition\",\n' +
    '       \"bookFormat\": \"http://schema.org/#bookformat\",\n' +
    '       \"potentialAction\" :{\n'+
    '           \"@type\":\"ReadAction\",\n' +
    '           \"target\":{\n'+   
    '               \"@type\":"EntryPoint\",\n' +
    '               \"urlTemplate\":\"#bookPurchaseURL\",\n' +
    '               \"actionPlatform\": [\n'+
    '                   \"https://schema.org/DesktopWebPlatform\",\n' +
    '                   \"https://schema.org/IOSPlatform\",\n' +
    '                   \"https://schema.org/AndroidPlatform\"\n' +
    '                 ]\n'+
    '               },\n'+
    '           \"expectsAcceptanceOf\": {\n'+
    '              \"@type\":\"Offer\",\n' +
    '              \"priceCurrency\":\"#prdPriceCurrency\",\n' +
    '              \"price\":\"#prdPrice\",\n' +
    '              \"eligibleRegion\": {\n'+
    '                   \"@type":"Country",\n' +
    '                   \"name\":\"#selectedCountry"\n' +
    '              },\n'+
    '           \"availability\":\"https://schema.org/#availability\"\n' +
    '           }\n'+
    '       }\n' +
    '     }]\n' +
    '   }\n' +
    '</script>';


//Search
var SEARCHschemaMarkup ='<script type="application/ld+json">\n' +
'{\n' +
'   \"@context\": \"http://schema.org/\",\n' +
'   \"@type\":\"WebSite\",\n' +
'   \"url\":\"#lbsiteUrl\",\n' +
'   \"potentialAction\" :{\n'+
'       \"@type":"SearchAction",\n' +
'       \"target\":\"#lbsearchUrl\/?s={search_term_string}",\n' +
'       \"query-input\":\"required name=search_term_string\"\n' +
'     }\n'+    
'   }\n' +
'</script>';

//Social Profile
var SOCIALPschemaMarkup ='<script type="application/ld+json">\n' +
'{\n' +
'   \"@context\": \"http://schema.org/\",\n' +
'   \"@type\":\"#TypeSP\",\n' +
'   \"@id\":\"#lbsiteUrl/#organization\",\n' +
'   \"name\":\"#AuthorName\",\n' +
'   \"url\":\"#lbsiteUrl\",\n' +
'   \"sameAs\" :[\n'+
'       \"#FacebookSP",\n' +
'       \"#TwitterSP",\n' +
'       \"#YouTubeSP",\n' +
'       \"#InstagramSP",\n' +
'       \"#LinkedInSP",\n' +
'       \"#PinterestSP",\n' +
'       \"#SoundCloudSP",\n' +
'       \"#Tumblr"\n' +
'     ]\n'+
'   }\n' +
'</script>';

//Breadcrumbs
var BreadCRUMBschemaMarkup='<script type="application/ld+json">\n' +
'{\n' +
'   \"@context\": \"http://schema.org/\",\n' +
'   \"@type\":\"BreadcrumbList\",\n' +
'   \"itemListElement\" :[{\n'+
'       \"@type\":\"ListItem\",\n' +
'       \"position\":\"#breadcrumbnumb1\",\n' +
'       \"name\":\"#breadcrumbname1\",\n' +
'       \"item\":\"#breadcrumbURL1\"\n' +
'       },{\n' +
'       \"@type\":\"ListItem\",\n' +
'       \"position\":\"#breadcrumbnumb2\",\n' +
'       \"name\":\"#breadcrumbname2\",\n' +
'       \"item\":\"#breadcrumbURL2\"\n' +
'       },{\n' +
'       \"@type\":\"ListItem\",\n' +
'       \"position\":\"#breadcrumbnumb3\",\n' +
'       \"name\":\"#breadcrumbname3\",\n' +
'       \"item\":\"#breadcrumbURL3\"\n' +
'       },{\n' +
'       \"@type\":\"ListItem\",\n' +
'       \"position\":\"#breadcrumbnumb4\",\n' +
'       \"name\":\"#breadcrumbname4\",\n' +
'       \"item\":\"#breadcrumbURL4\"\n' +
'       },{\n' +
'       \"@type\":\"ListItem\",\n' +
'       \"position\":\"#breadcrumbnumb5\",\n' +
'       \"name\":\"#breadcrumbname5\",\n' +
'       \"item\":\"#breadcrumbURL5\"\n' +
'     }]\n'+
'   }\n' +
'</script>';


//Logo 
var logoSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Organization\",\n' +
    '   \"url\":\"#lbsiteUrl\",\n' +
    '   \"logo\":\"#lblogoUrl\"\n' +
    '}\n' +
    '</script>';

//Video 
var VideoSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"VideoObject\",\n' +
    '   \"name\":\"#VideoName\",\n' +
    '   \"description\":\"#VideoDescription\",\n' +
    '   \"thumbnailUrl\" :[\n'+
    '       \"#vidThumbnail1",\n' +
    '       \"#vidThumbnail2",\n' +
    '       \"#vidThumbnail3"\n' +
    '     ],\n'+    
    '   \"uploadDate": "#datepub\",\n' +
    '   \"duration\":\"PT#vidDuration\",\n' +
    '   \"contentUrl\":\"#Videocontenturl\",\n' +
    '   \"embedUrl\":\"#Videoembedurl\",\n' +
    '   \"interactionCount\":\"#Videoviewcount\"\n' +
    '}\n' +
    '</script>';
//Subscription and Paywalled Content
var PWarticleSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"#articleType\",\n' +
    '   \"mainEntityOfPage\": {\n' +
    '      \"@type\": \"WebPage\",\n' +
    '      \"@id": "https://google.com/article\"\n' +
    '},\n' +
    '   \"headline\": \"#Headline\",\n' +
    '   \"image\": [\n' +
    '       \"#img1url\",\n' +
    '       \"#img2url\",\n' +
    '       \"#img3url\"\n' +
    '],\n' +
    '   \"datePublished": "#datepub\",\n' +
    '   \"dateModified": "#dateUpdate\",\n'  +
    '   \"author\": {\n' +
    '       \"@type\": \"#TypeSP\",\n' +
    '       \"name\": \"#AuthorName\"\n' +
    '},\n' +
    '   \"publisher\": {\n' +
    '      \"name\": \"#lbBusiName\",\n' +
    '      \"@type\": \"Organization",\n' +
    '      \"logo\": {\n' +
    '      \"@type\": \"ImageObject\",\n' +
    '      \"url\": \"#lblogoUrl\"\n' +
    '   }\n' +
    '},\n' +
    '   \"description\": \"#ArtDescript\",\n' +
    '   \"isAccessibleForFree\": \"False\",\n' +
    '   \"hasPart\":\n' +
    '      {\n' +
    '       \"@type\": \"WebPageElement\",\n' +
    '       \"isAccessibleForFree\": \"False\",\n' +
    '       \"cssSelector\" : \"#cssselector\"\n' +
        '}\n' +
    '}\n' +
    '</script>';


//Recipe
var RecipeschemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Recipe\",\n' +
    '   \"name\":\"#RecName\",\n' +
    '   \"image\": [\n'+
    '       \"#RecImage1Url\",\n' +
    '       \"#RecImage2Url\",\n' +
    '       \"#RecImage3Url\"\n' +
    '     ],\n'+
    '     \"author\": {\n'+
    '       \"@type\":\"Person\",\n' +
    '       \"name\":\"#reccreator\"\n' +
    '     },\n'+
    '   \"datePublished\":\"#pubDate\",\n' +
    '   \"description\":\"#recDescription\",\n' +
    '   \"prepTime\":\"PT#recPreptime\",\n' +
    '   \"cookTime\":\"PT#recCooktime\",\n' +
    '   \"totalTime\":\"PT#recTotaltime\",\n' +
    '   \"keywords\":\"#recKeywords\",\n' +
    '   \"recipeYield\":\"#recYield\",\n' +
    '   \"recipeCategory\":\"#recCategory\",\n' +
    '   \"recipeCuisine\":\"#recCuisine\",\n' +
    '   \"nutrition\": {\n'+
    '       \"@type\":\"NutritionInformation\",\n' +
    '       \"calories\":\"#recCalories\"\n' +
    '     },\n'+
    '     \"recipeIngredient\": [\n'+
    '       \#RecIngredients\n' +
    '     ],\n'+
    '     \"recipeInstructions\": [\n'+
    '     {\n'+
    '       \"@type\": \"HowToStep\",\n'+
    '       \"text"\: \"#recStep1\"\n'+
    '     },\n'+
    '     {\n'+
    '       \"@type\": \"HowToStep\",\n'+
    '       \"text"\: \"#recStep2\"\n'+
    '     },\n'+
    '     {\n'+
    '       \"@type\": \"HowToStep\",\n'+
    '       \"text"\: \"#recStep3\"\n'+
    '     },\n'+
    '     {\n'+
    '       \"@type\": \"HowToStep\",\n'+
    '       \"text"\: \"#recStep4\"\n'+
    '     },\n'+
    '     {\n'+
    '       \"@type\": \"HowToStep\",\n'+
    '       \"text"\: \"#recStep5\"\n'+
    '     }\n'+
    '     ],\n'+
    '   \"review\": {\n'+
    '       \"@type\":\"Review\",\n' +
    '       \"author\" :{\n'+
    '           \"@type\":\"#TypeSP\",\n' +
    '           \"name":\"#AuthorName\"\n' +
    '       },\n'+
    '       \"reviewRating\": {\n'+
    '           \"@type": "Rating\",\n' +
    '           \"ratingValue\":\"#ratinggiven\"\n'+
    '         },\n'+    
    '       \"reviewBody\":\"#ReviewBody\"\n' +
    '     },\n' +
    '       \"aggregateRating\": {\n'+
    '       \"@type\": \"AggregateRating\",\n' +
    '       \"ratingValue\":\"#AggRatValue\",\n' +
    '       \"reviewCount\":\"#AggRatCount\"\n' +
    '     },\n'+
    '     \"Video\": [\n'+
    '      {\n'+
    '           \"name\":\"#VideoName\",\n' +
    '           \"description\":\"#VideoDescription\",\n' +
    '           \"thumbnailUrl\" :[\n'+
    '               \"#vidThumbnail1",\n' +
    '               \"#vidThumbnail2",\n' +
    '               \"#vidThumbnail3"\n' +
    '           ],\n'+    
    '           \"uploadDate": "#datepub\",\n' +
    '           \"duration\":\"PT#vidDuration\",\n' +
    '           \"contentUrl\":\"#Videocontenturl\",\n' +
    '           \"embedUrl\":\"#Videoembedurl\",\n' +
    '           \"interactionCount\":\"#Videoviewcount\"\n' +
    '       }\n' +
    '   ]\n' +
    '}\n' +
    '</script>';
//Question and Answer 
var QASchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"QAPage\",\n' +
    '   \"mainEntity\": {\n'+
    '       \"@type\": \"Question",\n' +
    '       \"name\":\"#questionsf\",\n' +
    '       \"text\":\"#questionlf\",\n' +
    '       \"answerCount\":\"#qaanswercount\",\n' +
    '       \"upvoteCount\":\"#qaupvotecount\",\n' +
    '       \"dateCreated\":\"#qadatecreated\",\n' +
    '       \"author\": {\n' +
    '          \"@type\": \"Person\",\n' +
    '           \"name\": \"#qaaskname\"\n' +
    '       },\n' +
    '       \"acceptedAnswer\": {\n' +
    '       \"@type\": \"Answer\",\n' +
    '       \"text\": \"#qaAcceptAns.\",\n' +
    '       \"dateCreated\": \"#qaAcceptDate\",\n' +
    '       \"upvoteCount\": 1,\n' +
    '       \"url\": \"#qaAcceptAURL\",\n' +
    '       \"author\": {\n' +
    '           \"@type\": \"Person",\n' +
    '           \"name\": \"#qaaskname"\n' +
    '           }\n' +
    '         }\n' +
    '       }\n' +
    '   }\n' +
    '</script>';

//Occupation
var OccupationSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Occupation\",\n' +
    '   \"name\":\"#jobtitle\",\n' +
    '   \"mainEntityOfPage\": {\n'+
    '       \"@type\": \"WebPage",\n' +
    '       \"lastReviewed\":\"#occreviewdate\"\n' +
    '       },\n' +
    '   \"description\":\"#jobdescription\",\n' +
    '   \"estimatedSalary\": [ \n'+
    '       {\n' +
    '          \"@type\": \"MonetaryAmountDistribution\",\n' +
    '           \"name\": \"base\",\n' +
    '           \"currency\": \"#occCurrency\",\n' +
    '           \"unitText\": \"#occyear\",\n' +
    '           \"percentile10\": \"#oc10per\",\n' +
    '           \"percentile25\": \"#oc25per\",\n' +
    '           \"median\": \"#occmedian\",\n' +
    '           \"percentile75\": \"#oc75per\",\n' +
    '           \"percentile90\": \"#oc90per\"\n' +
    '       }\n' +
    '   ],\n' +
    '   \"occupationLocation\": [ \n'+
    '       {\n' +
    '          \"@type\": \"#occlocat\",\n' +
    '           \"name\": \"#cityname\"\n' + 
    '       }\n' +
    '   ]\n' +
    '}\n' +
    '</script>';
//Course 
var CourseSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Course\",\n' +
    '   \"name\":\"#coursename\",\n' +
    '   \"description\":\"#coursedescription\",\n' +
    '   \"provider\":{\n' +
    '       \"@type\":\"Organization\",\n' +
    '       \"name\":\"#Orgname\",\n' +
    '       \"sameAs\":\"#orgurl\"\n' +
    '   }\n' +
    '}\n' +
    '</script>';
//ClaimReview 
var ClaimSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"ClaimReview\",\n' +
    '   \"datePublished\":\"#claimreviewpublish\",\n' +
    '   \"url\":\"#claimURL\",\n' +
    '   \"itemReviewed\":\n' +
    '       {\n' +
    '       \"@type\":\"CreativeWork\",\n' +
    '       \"author\":\n' +
    '           {\n' +
    '               \"@type\": \"Organization\",\n' +
    '               \"name\": \"#claimauthorname\",\n' +
    '               \"sameAs\": \"#claimauthurl\"\n' +
    '           },\n' +
    '       \"datePublished\":\"#claimpublish\"\n' +
    '     },\n' +
    '   \"claimReviewed\":\"#claimreved\",\n' +
    '   \"author\":\n' +
'           {\n' +
'               \"@type\": \"Organization\",\n' +
'               \"name\": \"#claimrevauthorname\"\n' +
'           },\n' +
'       \"reviewRating\": \n' +
'           {\n' +
'               \"@type\": \"Rating\",\n' +
'               \"ratingValue\": \"#revratingvalue\",\n' +
'               \"bestRating\": \"#revbest\",\n' +
'               \"worstRating\": \"#revworst\",\n' +
'               \"alternateName\" : \"False\"\n' +
'           }\n' +
'       }\n' +
    '</script>';

//Dataset 
var DataSetSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Dataset\",\n' +
    '   \"name\":\"#datasetname\",\n' +
    '   \"description\":\"#datadescript\",\n' +
    '   \"url\":\"#datasetURL\",\n' +
    '   \"sameAs\":\"#datasameasURL\",\n' +
    '   \"keywords\":[\n' +
    '       #datakeywords\n' +
    '       ],\n' +  
    '   \"creator":{\n' +
    '       \"@type\":\"Organization\",\n' +
    '       \"url\":\"#creatorURL\",\n' +
    '       \"name\":\"#creatorName\",\n' +
    '       \"contactPoint\":{\n' +
    '           \"@type\": \"ContactPoint\",\n' +
    '           \"contactType\": \"#contactType\",\n' +
    '           \"telephone\": \"#contactPhone\",\n' +
    '           \"email\": \"#contactemail\"\n' +
    '       }\n' +
    '   },\n' +
    '   \"includedInDataCatalog":{\n' +
    '       \"@type\":\"DataCatalog\",\n' +
    '       \"name\":\"#datacatname\"\n' +
    '     },\n' +
    '   \"distribution\":[\n' +
    '       {\n' +
'               \"@type\": \"DataDownload\",\n' +
'               \"fileFormat\": \"#encodeformat1\",\n' +
'               \"contentUrl\": \"#contenturl1\"\n' +
'           }\n' +
'       ],\n' +
'       \"temporalCoverage\":\"#temporalcover\",\n' +
'       \"spatialCoverage":{\n' +
'           \"@type\": \"Place\",\n' +
'           \"geo":{\n' +
'               \"@type\": \"GeoShape\",\n' +
'               \"box\": \"#databox\"\n' +
'               }\n' +
'           }\n' +
'       }\n' +
    '</script>';

//Critic review
var CriticRevSchemaMarkup =
    '<script type="application/ld+json">\n' +
    '{\n' +
    '   \"@context\": \"http://schema.org/\",\n' +
    '   \"@type\":\"Review\",\n' +
    '   \"author\": {\n' +
    '       \"@type\": \"Organization\",\n' +
    '       \"name\": \"#claimauthorname\",\n' +
    '       \"sameAs\": \"#reviewauthurl\"\n' +
    '   },\n' +
    '   \"url\":\"#reviewURL\",\n' +
    '   \"datePublished\":\"#claimreviewpublish\",\n' +
    '   \"publisher\": {\n' +
    '       \"@type\": \"Organization\",\n' +
    '       \"name\": \"#reviewPubName\",\n' +
    '       \"sameAs\": \"#revpubsameas\"\n' +
    '     },\n' +
    '   \"description\":\"#revdescript\",\n' +
    '   \"inLanguage\":\"#revlang\",\n' +
    '   \"itemReviewed\":{\n' +
    '       \"@type\":\"#selectedlbType\",\n' +
    '       \"name\":\"#lbBusiName\",\n' +
    '       \"image\":\"#lblogoUrl\",\n' +
    '       \"url\":\"#lbsiteUrl\",\n' +
    '       \"telephone\":\"#lbTel\",\n' +
    '       \"priceRange\":\"#lbpricerange\",\n' +
    '       \"address\": {\n' +
    '           \"@type\": \"PostalAddress\",\n' +
    '           \"streetAddress\":\"#lbstAddress\",\n' +
    '           \"addressLocality\":\"#lbCity\",\n' +
    '           \"addressRegion\":\"#lbRegion\",\n' +
    '           \"postalCode\":\"#lbZip\",\n' +
    '           \"addressCountry\":\"#selectedCountry\"\n' +
    '           }\n' +
    '       }\n' +    
    '   },\n'+
    '   \"reviewRating\": \n' +
    '       {\n' +
    '       \"@type\": \"Rating\",\n' +
    '       \"ratingValue\": \"#revratingvalue\",\n' +
    '       \"bestRating\": \"#revbest\",\n' +
    '       \"worstRating\": \"#revworst\"\n' +
    '     }\n' +
    '}\n' +
    '</script>';

 //Employer Agg Rating
var EmployAggSchemaMarkup =
'<script type="application/ld+json">\n' +
'{\n' +
'   \"@context\": \"http://schema.org/\",\n' +
'   \"@type\":\"EmployerAggregateRating\",\n' +
'   \"itemReviewed\":{\n' +
'       \"@type\":\"Organization\",\n' +
'       \"name\":\"#lbBusiName\",\n' +
'       \"sameAs\":\"#lbsiteUrl\"\n' +
'       },\n' +    
'   \"ratingValue\": \"#revratingvalue\",\n' +
'   \"bestRating\": \"#revbest\",\n' +
'   \"worstRating\": \"#revworst\",\n' +
'   \"ratingCount\": \"#revcount\"\n' +
'}\n' +
'</script>';


 //Event
 var EventSchemaMarkup =
 '<script type="application/ld+json">\n' +
 '{\n' +
 '   \"@context\": \"http://schema.org/\",\n' +
 '   \"@type\":\"Event\",\n' +
 '   \"name\":\"#eventname\",\n' +
 '   \"startDate\":\"#eventstartdate\",\n' +
 '   \"location\":{\n' +
 '      \"@type\":\"Place\",\n' +
 '      \"name\":\"#eventlocationname\",\n' +
 '      \"address\":{\n' +
 '           \"@type\": \"PostalAddress\",\n' +
 '           \"streetAddress\":\"#lbstAddress\",\n' +
 '           \"addressLocality\":\"#lbCity\",\n' +
 '           \"addressRegion\":\"#lbRegion\",\n' +
 '           \"postalCode\":\"#lbZip\",\n' +
 '           \"addressCountry\":\"#selectedCountry\"\n' +
 '       }\n' +    
 '  },\n' +     
 '  \"image\": [\n' +
 '      \"#img1url\",\n' +
 '      \"#img2url\",\n' +
 '      \"#img3url\"\n' +
 '  ],\n' +
 '  \"description\": \"#eventdescription\",\n' +
 '  \"endDate\":\"#eventendDate\",\n' +
 '  \"offers\": {\n'+
 '       \"@type\":\"Offer\",\n' +
 '       \"url\":\"#prdURL\",\n' +
 '       \"price\":\"#prdPrice\",\n' +
 '       \"priceCurrency\":\"#prdPriceCurrency\",\n' +
 '       \"availability\":\"https://schema.org/#availability\",\n' +
 '       \"validFrom\":\"#eventvalidfrom\"\n' +
 '  },\n'+
 '   \"performer\": {\n' +
 '   \"@type\": \"PerformingGroup\",\n' +
 '   \"name\": \"#eventperformer\"\n' +
 '  }\n' +
 '}\n' +
 '</script>';


 //Job Posting
 var JobPostingSchemaMarkup =
 '<script type="application/ld+json">\n' +
 '{\n' +
 '   \"@context\": \"http://schema.org/\",\n' +
 '   \"@type\":\"JobPosting\",\n' +
 '   \"title\":\"#jobtitle\",\n' +
 '   \"description\":\"#jobdescription\",\n' +
 '   \"identifier\":{\n' +
 '      \"@type\":\"PropertyValue\",\n' +
 '      \"name\":\"#jobidentname\",\n' +
 '      \"value\":\"#jobidentvalue\"\n' +
 '     },\n' +    
 '   \"datePosted\":\"#jobposteddate\",\n' +
 '   \"validThrough\":\"#jobvalidthru\",\n' +
 '   \"employmentType\":\"#employtype\",\n' +
 '   \"hiringOrganization\":{\n' +
 '      \"@type\":\"Organization\",\n' +
 '      \"name\":\"#hiringname\",\n' +
 '      \"sameAs\":\"#hiringurl\",\n' +
 '      \"logo\":\"#hiringlogo\"\n' +
 '     },\n' +  
 '   \"jobLocation\":{\n' +
 '      \"@type\":\"Place\",\n' +
 '      \"address\":{\n' +
 '           \"@type\": \"PostalAddress\",\n' +
 '           \"streetAddress\":\"#lbstAddress\",\n' +
 '           \"addressLocality\":\"#lbCity\",\n' +
 '           \"addressRegion\":\"#lbRegion\",\n' +
 '           \"postalCode\":\"#lbZip\",\n' +
 '           \"addressCountry\":\"#selectedCountry\"\n' +
 '       }\n' +    
 '  },\n' +     
 '  \"baseSalary\":{\n' +
 '      \"@type\":\"MonetaryAmount\",\n' +
 '      \"currency\":\"#salarycurrency\",\n' +
 '      \"value\":{\n' +
 '           \"@type\": \"QuantitativeValue\",\n' +
 '           \"value\":\"#salaryvalue\",\n' +
 '           \"unitText\":\"#salaryUnit\"\n' +
 '       }\n' +    
 '     }\n' +  
 '}\n' +
 '</script>';

 //LiveStream
 var liveStremSchemaMarkup =
 '<script type="application/ld+json">\n' +
 '{\n' +
 '   \"@context\": \"http://schema.org/\",\n' +
 '   \"@type\":\"VideoObject\",\n' +
 '   \"contentUrl\":\"#Videocontenturl\",\n' +
 '   \"description\":\"#VideoDescription\",\n' +
 '   \"duration\":\"PT#vidDuration\",\n' +
 '   \"embedUrl\":\"#Videoembedurl\",\n' +
 '   \"expires\":\"#Videoexpire\",\n' +
 '   \"interactionCount\":\"#Videoviewcount\",\n' +
 '   \"name\":\"#VideoName\",\n' +
 '   \"thumbnailUrl\" :\"#vidThumbnail1",\n' +
 '   \"uploadDate": "#datepub\"\n' +
 '  }\n' +
  '   \"publication\":\[{\n' +
  '     \"@type\":\"BroadcastEvent\",\n' +
  '     \"startDate\":\"#livestreamstart\",\n' +
  '     \"endDate\":\"#livestreamend\",\n' +
  '     }],\n' +
  ' }\n' +
 '}\n' +
 '</script>';


var countries = [];
var schemas = [];
var lbTypeValues = [];
var bkFormat = [];


function Country(name, code) {
    this.countryName = name;
    this.countryCode = code;
};


function ViewModelPage(schemas) {
    var self = this;
    var subscriptions = [];

    // Integrate observable properties into the static data
    schemas.forEach(function(schema) {
        schema.schemaItems.forEach(function(schemaItem) {
            if (schemaItem.macro) {
                schemaItem.placeholder = !schemaItem.placeholder ? null : schemaItem.placeholder
                schemaItem.value = ko.observable(null);
            }
            else if (schemaItem.schemaItems !== undefined) {
                // TODO: For now assume this: many values this level using the macro naming
                schemaItem.schemaItems.forEach(function(subSchemaItem) {
                    if (!subSchemaItem.value) {
                        subSchemaItem.placeholder = !subSchemaItem.placeholder ? null : subSchemaItem.placeholder
                        subSchemaItem.value = ko.observable(null);
                    }
                    // Shared between all usages in schemas
                    schemaItem[subSchemaItem.macro.replace('#', '')] = subSchemaItem.value;
                });
            }
        });
    });

    // schema variations supported
    self.schemas = ko.observableArray(schemas);
    // the active schema
    self.schema = ko.observable(null);
    // On schema change we subscribe into all the individual schemaitems on a schema so that if they change
    // we rebuild the self.jsonld and we must also unsubscribe (dispose the subscription) from the previous
    // active schema
    self.schema.subscribe(function(newSchema) {
        // Throw out all the subscriptions to the previous active schema
        subscriptions.forEach(function(item) {
            item.dispose();
        });
        // Clear all the subscriptions
        subscriptions.splice(0, subscriptions.length);
        // Given real schema we subscribe to all the schemaitems
        if (newSchema) {
            // This is the common function for rebuilding jsonld, we need to use on schemaitem change and on change of the schema
            var updateJsonLD = function() {
                var jsonld = newSchema.jsonld;

                // Go through all schemaitems and replace the macros in the schema json
                newSchema.schemaItems.forEach(function(schemaItem) {
                    if (schemaItem.value !== undefined) {
                        var regex = new RegExp(schemaItem.macro, 'g');

                        jsonld = jsonld.replace(regex, schemaItem.value() ? schemaItem.value() : '');
                    }
                    else {
                        if (schemaItem.schemaItems !== undefined) {
                            schemaItem.schemaItems.forEach(function(subSchemaItem) {
                                var regex = new RegExp(subSchemaItem.macro, 'g');

                                jsonld = jsonld.replace(regex, subSchemaItem.value() ? subSchemaItem.value() : '');
                            });
                        }
                    }
                });

                // Now update the UI through this
                self.jsonLD(jsonld);
            };

            // Go through all the schemaitems (and subitems) to subscribe to the value change
            newSchema.schemaItems.forEach(function(schemaItem) {
                // Certain schedule items are not values but place holders for subitems (currently just to one level)
                if (schemaItem.value !== undefined) {
                    subscriptions.push(schemaItem.value.subscribe(updateJsonLD));
                }
                else {
                    // If there was no value on this subitem then check for sub schemaitems like for instance the business hours item
                    if (schemaItem.schemaItems !== undefined) {
                        schemaItem.schemaItems.forEach(function(subSchemaItem) {
                            subscriptions.push(subSchemaItem.value.subscribe(updateJsonLD));
                        });
                    }
                }
            });

            // When ever the schema changes we need to recalculate and update the UI
            updateJsonLD();
        }
        else {
            // Update the UI with nothing for jsonld
            self.jsonLD('');
        }
    });

    // This is the list of items that can be edited for a schema, on change of the schema this will also 
    // change and cause the UI to rebuild itself
    self.schemaItems = ko.pureComputed({
        read: function() {
            var schema = self.schema();

            return schema ? schema.schemaItems : [];
        }
    });

    // Default empty jsonld at start.
    self.jsonLD = ko.observable('');
}



lbTypeValues = [
    "AnimalShelter", "AutomotiveBusiness", "ChildCare", "Dentist", "DryCleaningOrLaundry", "EmergencyService", "EmploymentAgency", "EntertainmentBusiness", "FinancialService", "FoodEstablishment", "GovernmentOffice", "HealthAndBeautyBusiness", "HomeAndConstructionBusiness", "InternetCafe", "LegalService", "Library", "LodgingBusiness", "ProfessionalService", "RadioStation", "RealEstateAgent", "RecyclingCenter", "SelfStorage", "ShoppingCenter", "SportsActivityLocation", "Store", "TelevisionStation", "TouristInformationCenter", "TravelAgency"
];
bkFormat = ["EBook","Hardcover","Paperback","AudioBook"];

prdAvailability = ["InStock","OutOfStock","PreOrder"];

spType= ["Person","Organization"];

articleType= ["NewsArticle","BlogPosting"];

contactPt =["customer support","technical support","billing support","bill payment","sales", "reservations","credit card support","emergency","baggage tracking","roadside assistance","package tracking"];

paymentPeriod =["DAY","HOUR","MONTH","WEEK","YEAR"];

occLocation =["City","State","Country"];

employType =["FULL_TIME","PART_TIME","CONTRACTOR","TEMPORARY","INTERN","VOLUNTEER","PER_DIEM","OTHER"];

countries = [
    new Country("Afghanistan", "AF"),
    new Country("Albania", "AL"),
    new Country("Algeria", "DZ"),
    new Country("American Samoa", "AS"),
    new Country("Andorra", "AD"),
    new Country("Angola", "AO"),
    new Country("Anguilla", "AI"),
    new Country("Antarctica", "AQ"),
    new Country("Antigua and Barbuda", "AG"),
    new Country("Argentina", "AR"),
    new Country("Armenia", "AM"),
    new Country("Aruba", "AW"),
    new Country("Australia", "AU"),
    new Country("Austria", "AT"),
    new Country("Azerbaijan", "AZ"),
    new Country("Bahamas", "BS"),
    new Country("Bahrain", "BH"),
    new Country("Bangladesh", "BD"),
    new Country("Barbados", "BB"),
    new Country("Belarus", "BY"),
    new Country("Belgium", "BE"),
    new Country("Belize", "BZ"),
    new Country("Benin", "BJ"),
    new Country("Bermuda", "BM"),
    new Country("Bhutan", "BT"),
    new Country("Bolivia, Plurinational State of", "BO"),
    new Country("Bonaire, Sint Eustatius and Saba", "BQ"),
    new Country("Bosnia and Herzegovina", "BA"),
    new Country("Botswana", "BW"),
    new Country("Bouvet Island", "BV"),
    new Country("Brazil", "BR"),
    new Country("British Indian Ocean Territory", "IO"),
    new Country("Brunei Darussalam", "BN"),
    new Country("Bulgaria", "BG"),
    new Country("Burkina Faso", "BF"),
    new Country("Burundi", "BI"),
    new Country("Cambodia", "KH"),
    new Country("Cameroon", "CM"),
    new Country("Canada", "CA"),
    new Country("Cape Verde", "CV"),
    new Country("Cayman Islands", "KY"),
    new Country("Central African Republic", "CF"),
    new Country("Chad", "TD"),
    new Country("Chile", "CL"),
    new Country("China", "CN"),
    new Country("Christmas Island", "CX"),
    new Country("Cocos (Keeling) Islands", "CC"),
    new Country("Colombia", "CO"),
    new Country("Comoros", "KM"),
    new Country("Congo", "CG"),
    new Country("Congo, the Democratic Republic of the", "CD"),
    new Country("Cook Islands", "CK"),
    new Country("Costa Rica", "CR"),
    new Country("Côte d'Ivoire", "CI"),
    new Country("Croatia", "HR"),
    new Country("Cuba", "CU"),
    new Country("Curaçao", "CW"),
    new Country("Cyprus", "CY"),
    new Country("Czech Republic", "CZ"),
    new Country("Denmark", "DK"),
    new Country("Djibouti", "DJ"),
    new Country("Dominica", "DM"),
    new Country("Dominican Republic", "DO"),
    new Country("Ecuador", "EC"),
    new Country("Egypt", "EG"),
    new Country("El Salvador", "SV"),
    new Country("Equatorial Guinea", "GQ"),
    new Country("Eritrea", "ER"),
    new Country("Estonia", "EE"),
    new Country("Ethiopia", "ET"),
    new Country("Falkland Islands (Malvinas)", "FK"),
    new Country("Faroe Islands", "FO"),
    new Country("Fiji", "FJ"),
    new Country("Finland", "FI"),
    new Country("France", "FR"),
    new Country("French Guiana", "GF"),
    new Country("French Polynesia", "PF"),
    new Country("French Southern Territories", "TF"),
    new Country("Gabon", "GA"),
    new Country("Gambia", "GM"),
    new Country("Georgia", "GE"),
    new Country("Germany", "DE"),
    new Country("Ghana", "GH"),
    new Country("Gibraltar", "GI"),
    new Country("Greece", "GR"),
    new Country("Greenland", "GL"),
    new Country("Grenada", "GD"),
    new Country("Guadeloupe", "GP"),
    new Country("Guam", "GU"),
    new Country("Guatemala", "GT"),
    new Country("Guernsey", "GG"),
    new Country("Guinea", "GN"),
    new Country("Guinea-Bissau", "GW"),
    new Country("Guyana", "GY"),
    new Country("Haiti", "HT"),
    new Country("Heard Island and McDonald Islands", "HM"),
    new Country("Holy See (Vatican City State)", "VA"),
    new Country("Honduras", "HN"),
    new Country("Hong Kong", "HK"),
    new Country("Hungary", "HU"),
    new Country("Iceland", "IS"),
    new Country("India", "IN"),
    new Country("Indonesia", "ID"),
    new Country("Iran, Islamic Republic of", "IR"),
    new Country("Iraq", "IQ"),
    new Country("Ireland", "IE"),
    new Country("Isle of Man", "IM"),
    new Country("Israel", "IL"),
    new Country("Italy", "IT"),
    new Country("Jamaica", "JM"),
    new Country("Japan", "JP"),
    new Country("Jersey", "JE"),
    new Country("Jordan", "JO"),
    new Country("Kazakhstan", "KZ"),
    new Country("Kenya", "KE"),
    new Country("Kiribati", "KI"),
    new Country("Korea, Democratic People's Republic of", "KP"),
    new Country("Korea, Republic of", "KR"),
    new Country("Kuwait", "KW"),
    new Country("Kyrgyzstan", "KG"),
    new Country("Lao People's Democratic Republic", "LA"),
    new Country("Latvia", "LV"),
    new Country("Lebanon", "LB"),
    new Country("Lesotho", "LS"),
    new Country("Liberia", "LR"),
    new Country("Libya", "LY"),
    new Country("Liechtenstein", "LI"),
    new Country("Lithuania", "LT"),
    new Country("Luxembourg", "LU"),
    new Country("Macao", "MO"),
    new Country("Macedonia, the Former Yugoslav Republic of", "MK"),
    new Country("Madagascar", "MG"),
    new Country("Malawi", "MW"),
    new Country("Malaysia", "MY"),
    new Country("Maldives", "MV"),
    new Country("Mali", "ML"),
    new Country("Malta", "MT"),
    new Country("Marshall Islands", "MH"),
    new Country("Martinique", "MQ"),
    new Country("Mauritania", "MR"),
    new Country("Mauritius", "MU"),
    new Country("Mayotte", "YT"),
    new Country("Mexico", "MX"),
    new Country("Micronesia, Federated States of", "FM"),
    new Country("Moldova, Republic of", "MD"),
    new Country("Monaco", "MC"),
    new Country("Mongolia", "MN"),
    new Country("Montenegro", "ME"),
    new Country("Montserrat", "MS"),
    new Country("Morocco", "MA"),
    new Country("Mozambique", "MZ"),
    new Country("Myanmar", "MM"),
    new Country("Namibia", "NA"),
    new Country("Nauru", "NR"),
    new Country("Nepal", "NP"),
    new Country("Netherlands", "NL"),
    new Country("New Caledonia", "NC"),
    new Country("New Zealand", "NZ"),
    new Country("Nicaragua", "NI"),
    new Country("Niger", "NE"),
    new Country("Nigeria", "NG"),
    new Country("Niue", "NU"),
    new Country("Norfolk Island", "NF"),
    new Country("Northern Mariana Islands", "MP"),
    new Country("Norway", "NO"),
    new Country("Oman", "OM"),
    new Country("Pakistan", "PK"),
    new Country("Palau", "PW"),
    new Country("Palestine, State of", "PS"),
    new Country("Panama", "PA"),
    new Country("Papua New Guinea", "PG"),
    new Country("Paraguay", "PY"),
    new Country("Peru", "PE"),
    new Country("Philippines", "PH"),
    new Country("Pitcairn", "PN"),
    new Country("Poland", "PL"),
    new Country("Portugal", "PT"),
    new Country("Puerto Rico", "PR"),
    new Country("Qatar", "QA"),
    new Country("Réunion", "RE"),
    new Country("Romania", "RO"),
    new Country("Russian Federation", "RU"),
    new Country("Rwanda", "RW"),
    new Country("Saint Barthélemy", "BL"),
    new Country("Saint Helena, Ascension and Tristan da Cunha", "SH"),
    new Country("Saint Kitts and Nevis", "KN"),
    new Country("Saint Lucia", "LC"),
    new Country("Saint Martin (French part)", "MF"),
    new Country("Saint Pierre and Miquelon", "PM"),
    new Country("Saint Vincent and the Grenadines", "VC"),
    new Country("Samoa", "WS"),
    new Country("San Marino", "SM"),
    new Country("Sao Tome and Principe", "ST"),
    new Country("Saudi Arabia", "SA"),
    new Country("Senegal", "SN"),
    new Country("Serbia", "RS"),
    new Country("Seychelles", "SC"),
    new Country("Sierra Leone", "SL"),
    new Country("Singapore", "SG"),
    new Country("Sint Maarten (Dutch part)", "SX"),
    new Country("Slovakia", "SK"),
    new Country("Slovenia", "SI"),
    new Country("Solomon Islands", "SB"),
    new Country("Somalia", "SO"),
    new Country("South Africa", "ZA"),
    new Country("South Georgia and the South Sandwich Islands", "GS"),
    new Country("South Sudan", "SS"),
    new Country("Spain", "ES"),
    new Country("Sri Lanka", "LK"),
    new Country("Sudan", "SD"),
    new Country("Suriname", "SR"),
    new Country("Svalbard and Jan Mayen", "SJ"),
    new Country("Swaziland", "SZ"),
    new Country("Sweden", "SE"),
    new Country("Switzerland", "CH"),
    new Country("Syrian Arab Republic", "SY"),
    new Country("Taiwan, Province of China", "TW"),
    new Country("Tajikistan", "TJ"),
    new Country("Tanzania, United Republic of", "TZ"),
    new Country("Thailand", "TH"),
    new Country("Timor-Leste", "TL"),
    new Country("Togo", "TG"),
    new Country("Tokelau", "TK"),
    new Country("Tonga", "TO"),
    new Country("Trinidad and Tobago", "TT"),
    new Country("Tunisia", "TN"),
    new Country("Turkey", "TR"),
    new Country("Turkmenistan", "TM"),
    new Country("Turks and Caicos Islands", "TC"),
    new Country("Tuvalu", "TV"),
    new Country("Uganda", "UG"),
    new Country("Ukraine", "UA"),
    new Country("United Arab Emirates", "AE"),
    new Country("United Kingdom", "GB"),
    new Country("United States", "US"),
    new Country("United States Minor Outlying Islands", "UM"),
    new Country("Uruguay", "UY"),
    new Country("Uzbekistan", "UZ"),
    new Country("Vanuatu", "VU"),
    new Country("Venezuela, Bolivarian Republic of", "VE"),
    new Country("Viet Nam", "VN"),
    new Country("Virgin Islands, British", "VG"),
    new Country("Virgin Islands, U.S.", "VI"),
    new Country("Wallis and Futuna", "WF"),
    new Country("Western Sahara", "EH"),
    new Country("Yemen", "YE"),
    new Country("Zambia", "ZM"),
    new Country("Zimbabwe", "ZW")
];
scheduleItemsBusinessHours = [
    { macro: '#orgMonOpen', type: 'string' },
    { macro: '#orgMonClose', type: 'string' },
    { macro: '#orgTueOpen', type: 'string' },
    { macro: '#orgTueClose', type: 'string' },
    { macro: '#orgWedOpen', type: 'string' },
    { macro: '#orgWedClose', type: 'string' },
    { macro: '#orgThuOpen', type: 'string' },
    { macro: '#orgThuClose', type: 'string' },
    { macro: '#orgFriOpen', type: 'string' },
    { macro: '#orgFriClose', type: 'string' },
    { macro: '#orgSatOpen', type: 'string' },
    { macro: '#orgSatClose', type: 'string' },
    { macro: '#orgSunOpen', type: 'string' },
    { macro: '#orgSunClose', type: 'string' }
];

schemas = [
    // LocalBusiness [0]
    { title: 'LocalBusiness', jsonld: lbSchemaMarkup, schemaItems: [
        { 
            required: true,
            info: '<p>Select the most specific LocalBusiness sub-type possible from drop down list</p>',
            property: '@type', 
            placeholder: 'Select Business Type', 
            title: 'Local Business @type:', 
            macro: '#selectedlbType', 
            type: 'combo', 
            choices: lbTypeValues 
        },
        {   
            required: true,
            info: '<p>Business name.</p>',
            property: 'name', 
            placeholder: 'Business name', 
            title: 'Business name:', 
            macro: '#lbBusiName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>An image of the business.<ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li></ul></p>',
            property: 'image', 
            placeholder: 'Logo URL', 
            title: 'Logo URL:', 
            macro: '#lblogoUrl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Globally unique ID of the specific business location in the form of a URL. The ID should be stable and unchanging over time. Google Search treats the URL as an opaque string and it does not have to be a working link. If the business has multiple locations, make sure the @id is unique for each location</p>',
            property: '@id', 
            placeholder: 'Website url with suffix /#organization', 
            title: '@id (URL):', 
            macro: '#lbsiteIDUrl', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The fully-qualified URL of the specific business location. Unlike the @id property, this URL property should be a working link.</p>',
            property: 'url', 
            placeholder: 'Site Homepage URL', 
            title:'Site Homepage URL:', 
            macro: '#lbsiteUrl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A business phone number meant to be the primary contact method for customers. Be sure to include the country code and area code in the phone number.</p>',
            property: 'telephone', 
            placeholder: '+ Tel # including Country and area code', 
            title: 'Telephone (incl. (+ Country code)):', 
            macro: '#lbTel', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Price Range</p>',
            property: 'priceRange', 
            placeholder: '$$', 
            title: 'Price Range:', 
            macro: '#lbpricerange', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Address of the specific business location.</p>',
            property: 'address.streetAddress', 
            placeholder: 'Street number, street name, and unit number', 
            title: 'Street Address:', 
            macro: '#lbstAddress', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>City</p>',
            property: 'address.addressLocality', 
            placeholder: 'City', 
            title: 'City:', 
            macro: '#lbCity', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>State or province, if applicable.</p>',
            property: 'address.addressRegion', 
            placeholder: 'State / Province', 
            title: 'State/Province:', 
            macro: '#lbRegion', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Postal or zip code.</p>',
            property: 'address.postalCode', 
            placeholder: 'Postal or zip code.', 
            title: 'Zip/Post Code:',
            macro: '#lbZip', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Country Code</p>',
            property: 'address.addressCountry', 
            placeholder: '', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },
        { 
            required: true,
            info: '<p>Hours during which the business location is open.<br />Fill in the days that your business is open</p>',
            property: '', 
            placeholder: '', 
            title: '', 
            type: 'businessHours', 
            schemaItems: scheduleItemsBusinessHours 
        }
    ] },
    // Organization [1]
    { title: 'Corporate Contact', jsonld: orgSchemaMarkup, schemaItems: [
      /*  { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Local Business @type:', 
            macro: '#selectedlbType', 
            type: 'combo', 
            choices: lbTypeValues 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Business name:', 
            macro: '#lbBusiName', 
            type: 'string' 
        },   
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Logo URL:', 
            macro: '#lblogoUrl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: '@id (URL):', 
            macro: '#lbsiteIDUrl', 
            type: 'string' 
        },
        */
        { 
            required: true,
            info: '<p>must be the home page of the company&#39;s official site</p>',
            property: 'url ', 
            placeholder: 'Home Page URL', 
            title: 'Site Homepage URL:', 
            macro: '#lbsiteUrl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>One of the following values, not case sensitive. Additional contact types may be supported later.</p><ul><li><span class="codefont">customer support</span></li><li><span class="codefont">technical support</span></li><li><span class="codefont">billing support</span></li><li><span class="codefont">bill payment</span></li><li><span class="codefont">sales</span></li><li><span class="codefont">reservations</span></li><li><span class="codefont">credit card support</span></li><li><span class="codefont">emergency</span></li><li><span class="codefont">baggage tracking</span></li><li><span class="codefont">roadside assistance</span></li><li><span class="codefont">package tracking</span></li></ul>',
            property: 'contactType ', 
            placeholder: 'Home Page URL', 
            title: 'Site Homepage URL:', 
            macro: '#contactType', 
            type: 'combo', 
            choices: contactPt 
        },
       
        { 
            required: true,
            info: '<p>An internationalized version of the phone number, starting with the "+" symbol and country code (+1 in the US and Canada).</p>',
            property: 'telephone', 
            placeholder: '+1 123 123 1234', 
            title: 'Telephone (incl. (+ Country code)):', 
            macro: '#lbTel', 
            type: 'string' 
        }
         /*
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Price Range:', 
            macro: '#lbpricerange', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Address:', 
            macro: '#lbstAddress', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'City:', 
            macro: '#lbCity', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'State/Province:', 
            macro: '#lbRegion', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Zip/Post Code:', 
            macro: '#lbZip', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },
        { 
            required: true,
            info: '<p></p>',
            property: '', 
            placeholder: '', 
            title: '', 
            type: 'businessHours', 
            schemaItems: 
            scheduleItemsBusinessHours 
        }
        */
    ] },
    // Product[2]
    { title: 'Product', jsonld: PRDSchemaMarkup, schemaItems: [
        {  
            required: true,
            info: '<p>The name of the product.</p>',
            property: 'name', 
            placeholder: 'Name', 
            title: 'Product Name:', 
            macro: '#prdName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The URL of a product photo. Pictures clearly showing the product (for example, against a white background) are preferred. This property is required for Google Images and recommended for Google Search.<br /><strong>Additional image guidelines:</strong></p><ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li><li>For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1</li></ul>',
            property: 'image', 
            placeholder: 'Product Image URL', 
            title: 'Image URL:', 
            macro: '#prdImageUrl', 
            type: 'string' 
        },        
        { 
            required: true,
            info: '<p>The Description of the product.</p>',
            property: 'description', 
            placeholder: 'Description', 
            title: 'Description:', 
            macro: '#prdDescription', 
            type: 'string' 
        },     
        { 
            required: true,
            info: '<p>Product Page URL</p>',
            property: 'url', 
            placeholder: 'Product Page URL', 
            title: 'Product Page URL:', 
            macro: '#prdURL', 
            type: 'string' 
        },  
        { 
            required: true,
            info: '<p>Various identification properties; these are described at <a href="http://schema.org/Product" target="_blank">schema.org/Product</a>. Google recommends including brand and at least one identifier for each product.</p><p>Google Structured testing pool won&#39;t validate unless there is an additional SKU field. This number is being used for MPN and SKU in the code</p>',
            property: 'sku | gtin8 | gtin13 | gtin14 | mpn', 
            placeholder: 'Unique Product Number', 
            title: 'MPN:', 
            macro: '#prdMPN', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The brand of the product.</p>',
            property: 'brand', 
            placeholder: 'Product Brand', 
            title: 'Brand:', 
            macro: '#prdBrand', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The currency used to describe the product price, in three-letter <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 format</a>.</p>',
            property: 'priceCurrency', 
            placeholder: 'Currency Symbol', 
            title: 'Price Currency:', 
            macro: '#prdPriceCurrency', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The price of the product. Use a period rather than a comma "," to indicate a decimal point</p>',
            property: 'price', 
            placeholder: 'Price (do no include currency symbol)', 
            title: 'Price (do not include currency symbol):', 
            macro: '#prdPrice', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The date (in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> date format) after which the price will no longer be available. Your product snippet may not display if the priceValidUtil property indicates a past date.</p>',
            property: 'priceValidUntil', 
            placeholder: 'Valid until Date (YYYY-MM-DD)', 
            title: 'Valid until Date: ', 
            macro: '#prodpricecevaliduntil', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The total number of ratings for the item on your site. At least one of ratingCount or reviewCount is required.</p>',
            property: 'ratingCount [AggregateRating]', 
            placeholder: '', 
            title: 'AggregateRating Count:', 
            macro: '#AggRatCount', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>A numerical quality rating for the item (An Average).</p>',
            property: 'ratingValue [AggregateRating]', 
            placeholder: '', 
            title: 'AggregateRating Value:', 
            macro: '#AggRatValue', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The availability of this item; for example,</p><ul><li><span class="codefont">InStock</span></li><li><span class="codefont">OutOfStock</span></li><li><span class="codefont">PreOrder</span></li></ul>',
            property: '', 
            placeholder: '', 
            title: 'Availability:', 
            macro: '#availability', 
            type: 'combo', 
            choices: prdAvailability 
        }, 
        { 
            required: true,
            info: '<p>Person or Organization</p>',
            property: 'Review.authortype', 
            placeholder: 'Reviewer Type', 
            title: 'Reviewer Type:',
            macro: '#TypeSP', 
            type: 'combo', 
            choices: spType 
        },
        { 
            required: true,
            info: '<p>The author of the review. The reviewer’s name must be a valid name. For example, "50% off until Saturday" is not a valid name for a reviewer.</p>',
            property: 'Review.author', 
            placeholder: 'Reviewer Name', 
            title: 'Reviewer Name:', 
            macro: '#AuthorName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The rating given in this review. The rating can be a nested Rating or more specific subtype.</p>',
            property: 'ratingValue', 
            placeholder: 'Rating Number', 
            title: 'Rating Give:', 
            macro: '#ratinggiven', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The actual body of the review.</p>',
            property: 'reviewBody', 
            placeholder: 'Rating Text', 
            title: 'Rating Text:', 
            macro: '#ReviewBody', 
            type: 'string' 
        }, 


    ] },
    // Book[3]
    { title: 'Book', jsonld: BOOKSchemaMarkup, schemaItems: [
        {   
            required: true,
            info: '<p>The title of the book. If you provide multiple editions, use the title of the book edition.</p>',
            property: 'name', 
            placeholder: 'Book Name', 
            title: 'Book Name:', 
            macro: '#prdName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The author(s) of the book. For each author you list, you must provide a specific Person entity.</p>',
            property: 'author', 
            placeholder: 'Author Name(s)', 
            title: 'Author Name:', 
            macro: '#AuthorName', 
            type: 'string' 
        },

        { 
            required: true,
            info: '<p>URL of the page on your site about the book. The page may list all available editions.</p>',
            property: 'url', 
            placeholder: 'Book Page URL', 
            title: 'Book URL:', 
            macro: '#bookUrl', 
            type: 'string' 
        },         
        { 
            required: true,
            info: '<p>The format of the book using one or more of the following values:<ul><li><span class="codefont">EBook</span></li><li><span class="codefont">Hardcover</span></li><li><span class="codefont">Paperback</span></li><li><span class="codefont">AudioBook</span></li></ul></p>',
            property: 'bookFormat', 
            placeholder: '', 
            title: 'Book Format:', 
            macro: '#bookformat', 
            type: 'combo', 
            choices: bkFormat 
        },  
        { 
            required: true,
            info: '<p>The ISBN of the tome. The ISBN can be either 10 or 13 digits, but the 13 digits version is recommended if available. Use the ISBN of the print book instead if there is no ISBN for the edition being described; for example, for the Kindle edition. </p>',
            property: 'isbn', 
            placeholder: 'ISBN (13 Digit version)', 
            title: 'ISBN:', 
            macro: '#bookISBN', 
            type: 'string' 
        },  
        { 
            required: true,
            info: '<p>The edition of the book.</p>',
            property: 'bookEdition', 
            placeholder: 'Book Edition', 
            title: 'Book Edition:', 
            macro: '#bookEdition', 
            type: 'string' 
        }, 
        { 
            required: true,
            info: '<p>Date of first publication of this tome, in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 Format</a>.</p>',
            property: 'datePublished', 
            placeholder: 'YYYY-MM-DD', 
            title: 'Date Published:', 
            macro: '#bookDatePub', 
            type: 'string' 
        },   
        
        { 
            required: true,
            info: '<p>Link(s) to content. This must be a page where the book can be directly purchased  - ie this page must have a purchase button </p>',
            property: 'urlTemplate', 
            placeholder: 'Purchase Page URL', 
            title: 'Purchase URL:', 
            macro: '#bookPurchaseURL', 
            type: 'string' 
        }, 
        { 
            required: true,
            info: '<p>The currency (in 3-letter <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217 format</a>).</p>',
            property: 'PriceCurrency', 
            placeholder: 'USD', 
            title: 'Price Currency:', 
            macro: '#prdPriceCurrency', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The offer price of a product, currency will be appointed in priceCurrency property.</p>',
            property: 'price', 
            placeholder: 'Price (do not include currency symbol)', 
            title: 'Price (do not include currency symbol):', 
            macro: '#prdPrice', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The name of the country where the Offer is eligible.</p>',
            property: 'name', 
            placeholder: 'Country Name', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },
        { 
            required: true,
            info: '<p>The availability of this item; for example,</p><ul><li><span class="codefont">InStock</span></li><li><span class="codefont">OutOfStock</span></li><li><span class="codefont">PreOrder</span></li></ul>',
            property: 'availability', 
            placeholder: '', 
            title: 'Availability:', 
            macro: '#availability', 
            type: 'combo', 
            choices: prdAvailability 
        },  

    ] },
     // Site Links searchbox[4]
     { title: 'Sitelinks searchbox', jsonld: SEARCHschemaMarkup, schemaItems: 
     [
        { 
            required: true, 
            title: 'Site Homepage URLs:', 
            info: '<p>Array of one or two <a href="http://schema.org/SearchAction" target="_blank">SearchAction</a> objects</p><p>This object describes the URI to send the query to, and the syntax of the request that is sent.</p><p class="ns-notes">In this tool, the setting<br /><span class="codefont">@type:SearchAction</span><br />is used</p>',
            property: 'potentialAction', 
            placeholder: 'Set as: @type: Search Action', 
            macro: '@type:SearchAction', type: 'defaultdiv' 
        },
        { 
            required: true, 
            title: 'URL of Page with the search box (often the homepage url):', 
            info: 'Input the URL of the page with the search box to dynmically build the query string combining this and the query input below',
            property: 'potentialAction.target', 
            macro: '#lbsearchUrl', type: 'string' 
          
        },
        { 
            required: true, 
            title: 'Name of your search box:', 
            info: 'For WordPress the tool uses <br /><span class="codefont">\/?s={search_term_string}</span><br />appended to the url of the page with the search box.',
            property: 'potentialAction.query-input',
            macro: '', type: 'defaultdiv' 
          
        },
        { 
            required: true, 
            title: 'Site Homepage URLs:', 
            info: 'Specifies the URL of the site being searched. Set to the canonical homepage of your site.',
            property: 'url', 
            macro: '#lbsiteUrl', type: 'string' 
          
        },
    ] 
}
    ,
     // Social Profile[5]
     { title: 'Social Profile', jsonld: SOCIALPschemaMarkup, schemaItems: [
         
        { 
            required: true, 
            title: 'Profile for:', 
            info: 'You can define social profiles for a <a href="http://schema.org/Person target="_blank">Person</a> or <a href="http://schema.org/Organization target="_blank">Organization</a>. You must include the required properties for your content to be eligible for display as a rich result.',
            property: 'SchemaType', 
            macro: '#TypeSP', 
            type: 'combo', 
            choices: spType 
        },  
        { 
            required: true, 
            title: 'Name:',
            info: 'The name of the person or organization.',
            property: 'name', 
            placeholder: 'Your Name',
            macro: '#AuthorName', 
            type: 'string'
         },
        { 
            required: true, 
            title: 'Site Homepage URL:', 
            info: 'The URL for the person&#39;s or organization&#39;s official website.',
            property: 'url', 
            placeholder: 'Your site Homepage URL',
            macro: '#lbsiteUrl', 
            type: 'string' 
        },
      
        { 
            required: true, 
            title: 'Facebook URL:', 
            info: 'Your Facebook Page URL',
            property: 'sameAs', 
            placeholder: 'Your Facebook URL',
            macro: '#FacebookSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Twitter URL:', 
            info: 'Your Twitter URL',
            property: 'sameAs', 
            placeholder: 'Your Twitter URL',
            macro: '#TwitterSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'YouTube URL:', 
            info: 'Your YouTube URL',
            property: 'sameAs', 
            placeholder: 'Your YouTube URL',
            macro: '#YouTubeSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Instagram URL:',
            info: 'Your Instagram URL',
            property: 'sameAs',  
            placeholder: 'Your Instagram URL',
            macro: '#InstagramSP', 
            type: 'string'
         },
        { 
            required: true, 
            title: 'LinkedIn URL:', 
            info: 'Your LinkedIn URL',
            property: 'sameAs', 
            placeholder: 'Your LinkedIn URL',
            macro: '#LinkedInSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Pinterest URL:',
            info: 'Your Pinterest URL',
            property: 'sameAs',  
            placeholder: 'Your Pinterest URL',
            macro: '#PinterestSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'SoundCloud URL:',
            info: 'Your SoundCloud URL',
            property: 'sameAs',  
            placeholder: 'Your SoundCloud URL',
            macro: '#SoundCloudSP', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Tumblr Point:', 
            info: 'Your Tumblr URL',
            property: 'sameAs', 
            placeholder: 'Your Tumblr URL',
            macro: '#Tumblr', 
            type: 'string' 
        }
      

    ] }
    ,
     // Article[6]
     { title: 'Article', jsonld: articleSchemaMarkup, schemaItems: [

        { 
            required: true, 
            title: 'Article Type: ', 
            info: '<p>Article objects must be based on one of the following schema.org types: <a href="http://schema.org/Article" target="_blank">Article</a>, <a href="http://schema.org/NewsArticle" target="_blank">NewsArticle</a>, <a href="http://schema.org/BlogPosting" target="_blank">BlogPosting<a/>.</p><p>In this tool, it is limited to <span class="codefont">NewsArticle</span> and <span class="codefont">BlogPosting</span> as Article is so generic as to be meaningless</p>',
            property: 'schemaType', 
            placeholder: 'schemaType', 
            macro: '#articleType', 
            type: 'combo', choices: articleType
        },
        { 
            required: true, 
            title: 'Headline:', 
            info: 'The headline of the article. Headlines should not exceed <strong>110</strong> characters',
            property: 'headline',
            placeholder: 'Headline', 
            macro: '#Headline', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 1 URL:',
            info: 'The URL to an image that is representative of the article',
            property: 'image',
            placeholder: 'Image URL',  
            macro: '#img1url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 2 URL:', 
            info: 'A 2nd (optional) image that is representative of the article.',
            property: '',
            placeholder: 'Image 2 URL',  
            macro: '#img2url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 3 URL:', 
            info: 'A 3rd (optional) image that is representative of the article.',
            property: '',
            placeholder: 'Image 3 URL',  
            macro: '#img3url', 
            type: 'string' 
        },
        { 
            required: false, 
            title: 'Date Published (YYYY-MM-DD):', 
            info: '<p>The date and time the article was first published</p><p>The format should be YYYY-MM-DD</p><p>Add the <span class="codefont">dateModified</span> property if you want to provide more accurate date information to Google</p>',
            property: 'datePublished',
            placeholder: '2018-12-12',  
            macro: '#datepub', 
            type: 'string'
         },
        { 
            required: true, 
            title: 'Date Updated (YYYY-MM-DD):', 
            info: '<p>The date and time the article was was most recently modified</p><p>The format should be YYYY-MM-DD</p><p>Add the <span class="codefont">datePublished</span> property if you want to provide more accurate date information to Google</p>',
            property: 'dateModified',
            placeholder: '2018-12-12',  
            macro: '#dateUpdate', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Author Type:', 
            info: 'The Type of Author (<a href="http://schema.org/Person target="_blank">Person</a> or <a href="http://schema.org/Organization target="_blank">Organization</a>)',
            property: 'author',
            placeholder: 'Author Name',  
            macro: '#TypeSP', 
            type: 'combo', choices: spType
        },
        { 
            required: true, 
            title: 'Author Name:', 
            info: 'The author name',
            property: 'author.name',
            placeholder: 'Author Name',  
            macro: '#AuthorName', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Publisher Type:', 
            info: 'The type of  publisher (<a href="http://schema.org/Person target="_blank">Person</a> or <a href="http://schema.org/Organization target="_blank">Organization</a>) of the creative work.',
            property: 'publisher',
            placeholder: '',  
            macro: '#TypeSP', 
            type: 'combo', 
            choices: spType
         },  
        { 
            required: true, 
            title: 'Business name:', 
            info: 'The name of the publisher',
            property: 'publisher.name',
            placeholder: 'Publisher Name',  
            macro: '#lbBusiName', 
            type: 'string' 
        },   
        { 
            required: true, 
            title: 'Logo URL:', 
            info: '<p>The logo of the publisher organization</p><p><em>The Logo is not needed if the Publisher Type is Person</em></p>',
            property: 'publisher.logo.url',
            placeholder: 'Logo url',  
            macro: '#lblogoUrl', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Article Descrption:', 
            info: 'Description of the Article',
            property: 'description',
            placeholder: 'Short Article Description',  
            macro: '#ArtDescript', 
            type: 'string'
         },

    ] }
    ,
    // Breadcrumb[7]
    { title: 'Breadcrumb', jsonld: BreadCRUMBschemaMarkup, schemaItems: [
         
        { 
            required: true, 
            title: 'Webpage URL:', 
            info: '<p>[Level 1]The URL to the webpage that represents the breadcrumb.</p>',
            property: 'item', 
            placeholder: 'Webpage Level 1 URL',              
            macro: '#breadcrumbURL1', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Name:', 
            info: '<p>[Level 1]The title of the breadcrumb displayed for the user.</p>',
            property: 'name', 
            placeholder: 'Webpage Level 1 Name',   
            macro: '#breadcrumbname1', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Postion:', 
            info: '<p> [Level 1] The position of the breadcrumb in the breadcrumb trail. Position 1 signifies the beginning of the trail.</p>',
            property: 'position', 
            placeholder: 'Webpage Position Number',   
            macro: '#breadcrumbnumb1', 
            type: 'string'
        },
        { 
            required: true, 
            title: 'Webpage URL:', 
            info: '<p>[Level 2]The URL to the webpage that represents the breadcrumb.</p>',
            property: 'item', 
            placeholder: 'Webpage Level 2 URL',              
            macro: '#breadcrumbURL2', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Name:', 
            info: '<p> [Level 2]The title of the breadcrumb displayed for the user.</p>',
            property: 'name', 
            placeholder: 'Webpage Level 2 Name',   
            macro: '#breadcrumbname2', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Postion:', 
            info: '<p> [Level 2] The position of the breadcrumb in the breadcrumb trail. Position 1 signifies the beginning of the trail.</p>',
            property: 'position', 
            placeholder: 'Webpage Position Number',   
            macro: '#breadcrumbnumb2', 
            type: 'string'
        },
        { 
            required: true, 
            title: 'Webpage URL:', 
            info: '<p>[Level 3] The URL to the webpage that represents the breadcrumb.</p>',
            property: 'item', 
            placeholder: 'Webpage Level 3 URL',              
            macro: '#breadcrumbURL3', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Name:', 
            info: '<p>[Level 3]The title of the breadcrumb displayed for the user.</p>',
            property: 'name', 
            placeholder: 'Webpage Level 3 Name',   
            macro: '#breadcrumbname3', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Postion:', 
            info: '<p>[Level 3] The position of the breadcrumb in the breadcrumb trail. Position 1 signifies the beginning of the trail.</p>',
            property: 'position', 
            placeholder: 'Webpage Position Number',   
            macro: '#breadcrumbnumb3', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Webpage URL:', 
            info: '<p>[Level 4] The URL to the webpage that represents the breadcrumb.</p>',
            property: 'item', 
            placeholder: 'Webpage Level 4 URL',              
            macro: '#breadcrumbURL4', 
            type: 'string' 
        },  
        { 
            required: true, 
            title: 'Name:', 
            info: '<p>[Level 4]The title of the breadcrumb displayed for the user.</p>',
            property: 'name', 
            placeholder: 'Webpage Level 4 Name',   
            macro: '#breadcrumbname4', 
            type: 'string' 
        },  
        { 
            required: true, 
            title: 'Postion:', 
            info: '<p>[Level 4]The position of the breadcrumb in the breadcrumb trail. Position 1 signifies the beginning of the trail.</p>',
            property: 'position', 
            placeholder: 'Webpage Position Number',   
            macro: '#breadcrumbnumb4', 
            type: 'string' 
        },
        
        { 
            required: true, 
            title: 'Webpage URL:', 
            info: '<p>[Level 5] The URL to the webpage that represents the breadcrumb.</p>',
            property: 'item', 
            placeholder: 'Webpage Level 5 URL',              
            macro: '#breadcrumbURL5', 
            type: 'string' 
        },  
        { 
            required: true, 
            title: 'Name:', 
            info: '<p>[Level 5] The title of the breadcrumb displayed for the user.</p>',
            property: 'name', 
            placeholder: 'Webpage Level 5 Name',   
            macro: '#breadcrumbname5', 
            type: 'string'
        },  
        { 
            required: true, 
            title: 'Postion:', 
            info: '<p>[Level 5] The position of the breadcrumb in the breadcrumb trail. Position 1 signifies the beginning of the trail.</p>',
            property: 'position', 
            placeholder: 'Webpage Position Number',   
            macro: '#breadcrumbnumb5', 
            type: 'string' 
        }
      

    ] }
    ,
    // Logo [8]
    { title: 'Logo', jsonld: logoSchemaMarkup, schemaItems: [
          { 
              required: true,
              info: '<p>URL of a logo that is representative of the organization.</p><ul><li>The image must be 112x112px, at minimum.</li><li>The image URL must be crawlable and indexable.</li><li>The image must be in .jpg, .png, or. gif format.</li></ul>',
              property: 'logo ', 
              placeholder: 'Logo URL', 
              title: 'Logo URL:', 
              macro: '#lblogoUrl', 
              type: 'string' 
          },
          { 
            required: true,
            info: '<p>The URL of the website associated with the logo</p>',
            property: 'url ', 
            placeholder: 'Site URL', 
            title: 'Site URL:', 
            macro: '#lbsiteUrl', 
            type: 'string' 
        }
      ] }
      ,
      // Video [9]
      { title: 'Video', jsonld: VideoSchemaMarkup, schemaItems: [
            { 
                required: true,
                info: '<p>The title of the video</p>',
                property: 'name ', 
                placeholder: 'Video Name', 
                title: 'Video Name:', 
                macro: '#VideoName', 
                type: 'string' 
            },
            { 
              required: true,
              info: '<p>The description of the video</p>',
              property: 'description ', 
              placeholder: 'Video Description', 
              title: 'Video Description:', 
              macro: '#VideoDescription', 
              type: 'string' 
          },
          { 
            required: true,
            info: '<p>Repeated field of ImageObject or URL</p><p>Additional image guidelines:</p><ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li><li>For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1.</li></ul>',
            property: 'thumbnailUrl ', 
            placeholder: 'A URL pointing to the video thumbnail image file.', 
            title: 'Thumbnail URK', 
            macro: '#vidThumbnail1', 
            type: 'string' 
        },
        { 
          required: true,
          info: '<p>Additional Thumbnail</p>',
          property: 'thumbnailUrl ', 
          placeholder: 'A URL pointing to the 2nd video thumbnail image file.', 
          title: 'Thumbnail URK', 
          macro: '#vidThumbnail2', 
          type: 'string' 
      },
      { 
        required: true,
        info: '<p>Additional Thumbnail</p>',
        property: 'thumbnailUrl ', 
        placeholder: 'A URL pointing to the 3rd video thumbnail image file.', 
        title: 'Thumbnail URL', 
        macro: '#vidThumbnail3', 
        type: 'string' 
    },
    { 
      required: true,
      info: '<p>The date the video was first published, in ISO 8601 format - YYYYMMDD</p>',
      property: 'uploadDate ', 
      placeholder: 'Upload Date', 
      title: 'Date', 
      macro: '#datepub', 
      type: 'string' 
    },
    { 
      required: false,
      info: '<p>The duration of the video in ISO 8601 format</p>',
      property: 'duration ', 
      placeholder: 'Duration', 
      title: 'Duration', 
      macro: '#vidDuration', 
      type: 'string' 
    },
    { 
      required: false,
      info: '<p>A URL pointing to the actual video media file.</p><p>Make sure to follow <a href="https://support.google.com/webmasters/answer/156442" target="_blank">Video best practices.</a></p>',
      property: 'contentUrl ', 
      placeholder: 'Content URL', 
      title: 'Content URL', 
      macro: '#Videocontenturl', 
      type: 'string' 
    },
    { 
      required: false,
      info: '<p>A URL pointing to a player for the specific video. Usually this is the information in the src element of an <span class="codefont"><embed></span> tag.</p><p>Make sure to follow <a href="https://support.google.com/webmasters/answer/156442" target="_blank">Video best practices.</a></p>',
      property: 'embedUrl ', 
      placeholder: 'Embed URL', 
      title: 'Embed URL', 
      macro: '#Videoembedurl', 
      type: 'string' 
    },
    { 
      required: false,
      info: '<p>The number of times the video has been viewed.</p>',
      property: 'interactionCount ', 
      placeholder: 'Interaction Count', 
      title: 'Interaction Count', 
      macro: '#Videoviewcount', 
      type: 'string' 
    }
    ] }
    
    ,
     // Paywall[10]
     { title: 'Subscription/Paywall', jsonld: PWarticleSchemaMarkup, schemaItems: [

        { 
            required: true, 
            title: 'Article Type: ', 
            info: '<p>Article objects must be based on one of the following schema.org types: <a href="http://schema.org/Article" target="_blank">Article</a>, <a href="http://schema.org/NewsArticle" target="_blank">NewsArticle</a>, <a href="http://schema.org/BlogPosting" target="_blank">BlogPosting<a/>.</p><p>In this tool, it is limited to <span class="codefont">NewsArticle</span> and <span class="codefont">BlogPosting</span> as Article is so generic as to be meaningless</p>',
            property: 'schemaType', 
            placeholder: 'schemaType', 
            macro: '#articleType', 
            type: 'combo', choices: articleType
        },
        { 
            required: true, 
            title: 'Headline:', 
            info: 'The headline of the article. Headlines should not exceed <strong>110</strong> characters',
            property: 'headline',
            placeholder: 'Headline', 
            macro: '#Headline', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 1 URL:',
            info: 'The URL to an image that is representative of the article',
            property: 'image',
            placeholder: 'Image URL',  
            macro: '#img1url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 2 URL:', 
            info: 'A 2nd (optional) image that is representative of the article.',
            property: '',
            placeholder: 'Image 2 URL',  
            macro: '#img2url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 3 URL:', 
            info: 'A 3rd (optional) image that is representative of the article.',
            property: '',
            placeholder: 'Image 3 URL',  
            macro: '#img3url', 
            type: 'string' 
        },
        { 
            required: false, 
            title: 'Date Published (YYYY-MM-DD):', 
            info: '<p>The date and time the article was first published</p><p>The format should be YYYY-MM-DD</p><p>Add the <span class="codefont">dateModified</span> property if you want to provide more accurate date information to Google</p>',
            property: 'datePublished',
            placeholder: '2018-12-12',  
            macro: '#datepub', 
            type: 'string'
         },
        { 
            required: true, 
            title: 'Date Updated (YYYY-MM-DD):', 
            info: '<p>The date and time the article was was most recently modified</p><p>The format should be YYYY-MM-DD</p><p>Add the <span class="codefont">datePublished</span> property if you want to provide more accurate date information to Google</p>',
            property: 'dateModified',
            placeholder: '2018-12-12',  
            macro: '#dateUpdate', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Author Type:', 
            info: 'The Type of Author (<a href="http://schema.org/Person target="_blank">Person</a> or <a href="http://schema.org/Organization target="_blank">Organization</a>)',
            property: 'author',
            placeholder: 'Author Name',  
            macro: '#TypeSP', 
            type: 'combo', choices: spType
        },
        { 
            required: true, 
            title: 'Author Name:', 
            info: 'The author name',
            property: 'author.name',
            placeholder: 'Author Name',  
            macro: '#AuthorName', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Publisher Type:', 
            info: 'The type of  publisher (<a href="http://schema.org/Person target="_blank">Person</a> or <a href="http://schema.org/Organization target="_blank">Organization</a>) of the creative work.',
            property: 'publisher',
            placeholder: '',  
            macro: '#TypeSP', 
            type: 'combo', 
            choices: spType
         },  
        { 
            required: true, 
            title: 'Business name:', 
            info: 'The name of the publisher',
            property: 'publisher.name',
            placeholder: 'Publisher Name',  
            macro: '#lbBusiName', 
            type: 'string' 
        },   
        { 
            required: true, 
            title: 'Logo URL:', 
            info: '<p>The logo of the publisher organization</p><p><em>The Logo is not needed if the Publisher Type is Person</em></p>',
            property: 'publisher.logo.url',
            placeholder: 'Logo url',  
            macro: '#lblogoUrl', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Article Description:', 
            info: 'Description of the Article',
            property: 'description',
            placeholder: 'Short Article Description',  
            macro: '#ArtDescript', 
            type: 'string'
         },
         { 
             required: true, 
             title: 'CSS Class name:', 
             info: '<p>The cssSelector references the class name for the HTML element you used to wrap the paywalled content. For example a <span class="codefont">&lt;div class="paywall"&gt;This is the protected content&lt;/div&gt;</span><br />The <span class="codefont">cssSelector</span> in this example would be <span class="codefont">.paywall</span></p>',
             property: 'cssSelector',
             placeholder: 'css Class name (include the first ".")',  
             macro: '#cssselector', 
             type: 'string'
          }

    ] }
    ,
    // Recipe [11]
    { title: 'Recipe', jsonld: RecipeschemaMarkup, schemaItems: [
          { 
              required: true,
              info: '<p>The name of the dish.</p>',
              property: 'name ', 
              placeholder: 'Dish Name', 
              title: 'Dish Name:', 
              macro: '#RecName', 
              type: 'string' 
          },
          { 
            required: true,
            info: '<p>Image of the completed dish.<br />Additional image guidelines:<ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li><li>For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1.</li></ul></p>',
            property: 'image ', 
            placeholder: 'Image 1 URL', 
            title: 'Image 1 URL:', 
            macro: '#RecImage1Url', 
            type: 'string' 
        },
        { 
          required: true,
          info: '<p>2nd Image of the completed dish.</p>',
          property: 'image.2 ', 
          placeholder: 'Image 2 URL', 
          title: 'Image 2 URL:', 
          macro: '#RecImage2Url', 
          type: 'string' 
        },
        { 
            required: true,
            info: '<p>3rd Image of the completed dish.</p>',
            property: 'image.3 ', 
            placeholder: 'Image 3 URL', 
            title: 'Image 3 URL:', 
            macro: '#RecImage3Url', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Creator of the recipe.</p>',
            property: 'author ', 
            placeholder: 'Dish Creator Name', 
            title: 'Dish Creator Name:', 
            macro: '#reccreator', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Date Published</p>',
            property: 'datePublished ', 
            placeholder: 'YYYY-MM-DD', 
            title: 'Recipe Published Date:', 
            macro: '#pubDate', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A short summary describing the dish.</p>',
            property: 'description', 
            placeholder: 'Recipe description', 
            title: 'Recipe description:', 
            macro: '#recDescription', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The length of time it takes to prepare the dish, in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 format</a>. You can use min and max as child elements to specify a range of time.</p><p>Always use in combination with <span class="codefont">cookTime.</span></p>',
            property: 'prepTime', 
            placeholder: 'Prep Time - 30M', 
            title: 'Recipe Prep Time:', 
            macro: '#recPreptime', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The time it takes to actually cook the dish, in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 format</a>. You can use min and max as child elements to specify a range of time.</p><p>Always use in combination with <span class="codefont">prepTime.</span></p>',
            property: 'cookTime', 
            placeholder: 'Cook Time - 30M', 
            title: 'Recipe Cook Time:', 
            macro: '#recCooktime', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The total time it takes to prepare the cook the dish, in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 format</a>. You can use min and max as child elements to specify a range of time.</p><p>Always use in combination with both <span class="codefont">prepTime.</span> and <span class="codefont">prepTime.</span></p>',
            property: 'totalTime', 
            placeholder: 'Total Time - 60M', 
            title: 'Recipe Total Time:', 
            macro: '#recTotaltime', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Other terms for your recipe such as the season (&#34;summer&#34;), the holiday (&#34;Halloween&#34;), or other descriptors (&#34;quick&#34;, &#34;easy&#34;, &#34;authentic&#34;).</p><ul><li>Separate multiple entries in a keywords list with commas.</li><li>Don&#39;t use a tag that should be in <span class="codefont">recipeCategory</span> or <span class="codefont">recipeCuisine.</span></li></ul>',
            property: 'keywords', 
            placeholder: 'Keyword1, keyword2', 
            title: 'Keywords:', 
            macro: '#recKeywords', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The quantity produced by the recipe. For example: number of people served, or number of servings.</p>',
            property: 'recipeYield', 
            placeholder: 'Quantity or Servings produced', 
            title: 'Number of Servings:', 
            macro: '#recYield', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The type of meal or course your recipe is about. For example: &#34;dinner&#34;, &#34;entree&#34;, or &#34;dessert&#34;.</p>',
            property: 'recipeCategory', 
            placeholder: 'Recipe Category', 
            title: 'Recipe Category:', 
            macro: '#recCategory', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The region associated with your recipe. For example, &#34;French&#34;, &#34;Mediterranean&#34;, or &#34;American&#34;.</p>',
            property: 'recipeCuisine', 
            placeholder: 'Recipe Cuisine', 
            title: 'Recipe Cuisine:', 
            macro: '#recCuisine', 
            type: 'string' 
        },
      { 
          required: true,
          info: '<p>The number of calories in each serving.</p>',
          property: 'nutrition.calories', 
          placeholder: 'Calories per serving', 
          title: 'Nutrition Information:', 
          macro: '#recCalories', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>An ingredient used in the recipe. This property is recommended for recipes on Google Search, but it&#39;s required for guidance with the Google Assistant on Google Home and smart displays.</p><ul><li>Include only the ingredient text that is necessary for making the recipe.</li><li>Don&#39;t include unnecessary information, such as a definition of the ingredient.</li></ul><p>In this tool, enter each ingredient item with quantity in &#34; separated by a comma as per:<br /><span class="codefont">&#34;1 Lemon&#34;, &#34;1 cup Flour&#34;, &#34;1 tsp Baking Powder&#34;</span></p>',
          property: 'recipeIngredient', 
          placeholder: '"1 oz ingredient 1","3 cups of Ingredient2"', 
          title: 'Ingredients:', 
          macro: '#RecIngredients', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>The steps to make the dish. This property is recommended for recipes on Google Search, but it&#39;s required for guidance with the Google Assistant on Google Home and smart displays.</p>',
          property: 'recipeInstructions', 
          placeholder: 'How To Step 1', 
          title: 'How To: Step 1:', 
          macro: '#recStep1', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>2nd Step',
          property: 'recipeInstructions', 
          placeholder: 'How To Step 2', 
          title: 'How To: Step 2:', 
          macro: '#recStep2', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>3rd Step',
          property: 'recipeInstructions', 
          placeholder: 'How To Step 3', 
          title: 'How To: Step 3:', 
          macro: '#recStep3', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>4th Step',
          property: 'recipeInstructions', 
          placeholder: 'How To Step 4', 
          title: 'How To: Step 4:', 
          macro: '#recStep4', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>5th Step',
          property: 'recipeInstructions', 
          placeholder: 'How To Step 5', 
          title: 'How To: Step 5:', 
          macro: '#recStep5', 
          type: 'string' 
      }, 
      { 
          required: true,
          info: '<p>Person or Organization</p>',
          property: 'Review.authortype', 
          placeholder: 'Reviewer Type', 
          title: 'Reviewer Type:',
          macro: '#TypeSP', 
          type: 'combo', 
          choices: spType 
      },
      { 
          required: true,
          info: '<p>The author of the review. The reviewer’s name must be a valid name. For example, "50% off until Saturday" is not a valid name for a reviewer.</p>',
          property: 'Review.author', 
          placeholder: 'Reviewer Name', 
          title: 'Reviewer Name:', 
          macro: '#AuthorName', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>The rating given in this review. The rating can be a nested Rating or more specific subtype.</p>',
          property: 'ratingValue', 
          placeholder: 'Rating Number', 
          title: 'Rating Give:', 
          macro: '#ratinggiven', 
          type: 'string' 
      },
      { 
          required: true,
          info: '<p>The actual body of the review.</p>',
          property: 'reviewBody', 
          placeholder: 'Rating Text', 
          title: 'Rating Text:', 
          macro: '#ReviewBody', 
          type: 'string' 
      },
      { 
        required: true,
        info: '<p>The total number of ratings for the item on your site. At least one of ratingCount or reviewCount is required.</p>',
        property: 'ratingCount [AggregateRating]', 
        placeholder: '', 
        title: 'AggregateRating Count:', 
        macro: '#AggRatCount', 
        type: 'string'
    },
    { 
        required: true,
        info: '<p>A numerical quality rating for the item (An Average).</p>',
        property: 'ratingValue [AggregateRating]', 
        placeholder: '', 
        title: 'AggregateRating Value:', 
        macro: '#AggRatValue', 
        type: 'string'
    },
    { 
        required: true,
        info: '<p>The title of the video</p>',
        property: 'name ', 
        placeholder: 'Video Name', 
        title: 'Video Name:', 
        macro: '#VideoName', 
        type: 'string' 
    },
    { 
      required: true,
      info: '<p>The description of the video</p>',
      property: 'description ', 
      placeholder: 'Video Description', 
      title: 'Video Description:', 
      macro: '#VideoDescription', 
      type: 'string' 
    },
    { 
        required: true,
        info: '<p>Repeated field of ImageObject or URL</p><p>Additional image guidelines:</p><ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li><li>For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1.</li></ul>',
        property: 'thumbnailUrl ', 
        placeholder: 'A URL pointing to the video thumbnail image file.', 
        title: 'Thumbnail URK', 
        macro: '#vidThumbnail1', 
        type: 'string' 
    },
    { 
        required: true,
        info: '<p>Additional Thumbnail</p>',
        property: 'thumbnailUrl ', 
        placeholder: 'A URL pointing to the 2nd video thumbnail image file.', 
        title: 'Thumbnail URK', 
        macro: '#vidThumbnail2', 
        type: 'string' 
    },
    { 
        required: true,
        info: '<p>Additional Thumbnail</p>',
        property: 'thumbnailUrl ', 
        placeholder: 'A URL pointing to the 3rd video thumbnail image file.', 
        title: 'Thumbnail URL', 
        macro: '#vidThumbnail3', 
        type: 'string' 
    },
    { 
        required: true,
        info: '<p>The date the video was first published, in ISO 8601 format - YYYYMMDD</p>',
        property: 'uploadDate ', 
        placeholder: 'Upload Date', 
        title: 'Date', 
        macro: '#datepub', 
        type: 'string' 
    },
    { 
        required: false,
        info: '<p>The duration of the video in ISO 8601 format</p>',
        property: 'duration ', 
        placeholder: 'Duration', 
        title: 'Duration', 
        macro: '#vidDuration', 
        type: 'string' 
    },
    { 
        required: false,
        info: '<p>A URL pointing to the actual video media file.</p><p>Make sure to follow <a href="https://support.google.com/webmasters/answer/156442" target="_blank">Video best practices.</a></p>',
        property: 'contentUrl ', 
        placeholder: 'Content URL', 
        title: 'Content URL', 
        macro: '#Videocontenturl', 
        type: 'string' 
    },
    { 
        required: false,
        info: '<p>A URL pointing to a player for the specific video. Usually this is the information in the src element of an <span class="codefont"><embed></span> tag.</p><p>Make sure to follow <a href="https://support.google.com/webmasters/answer/156442" target="_blank">Video best practices.</a></p>',
        property: 'embedUrl ', 
        placeholder: 'Embed URL', 
        title: 'Embed URL', 
        macro: '#Videoembedurl', 
        type: 'string' 
    },
    { 
        required: false,
        info: '<p>The number of times the video has been viewed.</p>',
        property: 'interactionCount ', 
        placeholder: 'Interaction Count', 
        title: 'Interaction Count', 
        macro: '#Videoviewcount', 
        type: 'string' 
    }
    ] },
    // QA [12]
    { title: 'QA Page', jsonld: QASchemaMarkup, schemaItems: [
        { 
            required: true,
            info: '<p>The full text of the short form of the question. For example, &#34;How many teaspoons in a cup?&#34;.</p>',
            property: 'name ', 
            placeholder: 'Question Text - Short form', 
            title: 'Question:', 
            macro: '#questionsf', 
            type: 'string' 
        },
        { 
          required: false,
          info: '<p>The full text of the long form of the question. For example, &#34;I&#39;m cooking, and I need to know how many teaspoons are in a cup. How many teaspoons are in 1 cup?&#34;</p>',
          property: 'text ', 
          placeholder: 'Question Text - Long form', 
          title: 'Question Text - Long form:', 
          macro: '#questionlf', 
          type: 'string' 
        },
        { 
            required: false,
            info: '<p>The total number of answers to the question. For example, if there are 15 answers, but only the first 10 are marked up due to pagination, this value would be 15.</p><p><em>For the sake of this tool, we are will only be giving an accepted answer, so this value is 1</em></p>',
            property: 'answerCount ', 
            placeholder: 'Answer Count', 
            title: 'Answer Count', 
            macro: '#qaanswercount', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The total number of votes that this question has received. If the page supports upvotes and downvotes, then set the upvoteCount value to a single aggregate value that represents both upvotes and downvotes. For example, if there are 5 upvotes and 2 downvotes, the aggregate value used for upvoteCount is 3. If there are 5 upvotes and downvotes are not supported, then the value for upvoteCount is 5.</p>',
            property: 'upvoteCount ', 
            placeholder: 'Total Number of Votes', 
            title: 'Total Number of Votes', 
            macro: '#qaupvotecount', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The date at which the question was added to the page, in ISO-8601 format.</p>',
            property: 'dateCreated ', 
            placeholder: 'YYYY-MM-DD', 
            title: 'Date Question was added to the page', 
            macro: '#qadatecreated', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The author of the question.</p>',
            property: 'author ', 
            placeholder: 'Question Author Name', 
            title: 'Question Author Name', 
            macro: '#qaaskname', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The full text of the answer. If only a portion is marked up, your content may not be shown and Google cannot determine the best text to display.</p>',
            property: 'text ', 
            placeholder: 'Accepted Answer Text', 
            title: 'Accepted Answer Text', 
            macro: '#qaAcceptAns', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A URL that links directly to this answer. For example: </p><p>It is strongly recommended to provide a URL for each answer because it improves the user experience when the user clicks through to your site.</p>',
            property: 'url ', 
            placeholder: 'Answer URL', 
            title: 'Answer URL', 
            macro: '#qaAcceptAURL', 
            type: 'string' 
        }
    ] },
    // Occupation [13]
    { title: 'Occupation', jsonld: OccupationSchemaMarkup, schemaItems: [
        { 
            required: true,
            info: '<p>The title of the occupation. This field allows free-form text. For example, &#34;Software Engineer&#34;.</p><ul><li>This field should be the title of the occupation only.</li><li>Don&#39;t include job codes, addresses, dates, salaries, or company names in the name field.</li><li>Provide concise, readable titles.</li><li>Don&#39;t overuse special characters such as &#34;!&#34; and &#34;*&#34;. Abusing special characters might cause your markup to be considered as Spammy Structured Markup. Numbers and characters such as &#34;/&#34; and &#34;-&#34; are acceptable.</li></ul>',
            property: 'name ', 
            placeholder: 'Job Title', 
            title: 'Job Title:', 
            macro: '#jobtitle', 
            type: 'string' 
        },
        { 
          required: true,
          info: '<p>The description of the occupation.<br />The description should be a complete representation of the job, including job responsibilities, qualifications, skills, working hours, education requirements, and experience requirements.<ul><li>Include the description on all leaf pages that a user may land on, not just on the top-level page.</li><li>The description must uniquely identify the occupation and provide a specific description of what the occupation entails.</li><li>The description can&#39;t be the same as the name.</li></ul></p>',
          property: 'description ', 
          placeholder: 'Job Description', 
          title: 'Job Description', 
          macro: '#jobdescription', 
          type: 'string' 
        },
        { 
            required: false,
            info: '<p>The date when the estimated salary information was produced. The <span class="codefont">lastReviewed</span> field is in ISO 8601 format; for example:</p>',
            property: 'lastReviewed ', 
            placeholder: 'YYYY-MM-DD', 
            title: 'Date Last Reviewed', 
            macro: '#occreviewdate', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217 3-letter currency code</a>. E.g. USD or CAD</p>',
            property: 'currency ', 
            placeholder: 'Currency Symbol', 
            title: 'Salary Currency', 
            macro: '#occCurrency', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The frequency of the specified value. Typical values for unitText are:</p><ul><li></li></ul>',
            property: 'unitText ', 
            placeholder: '', 
            title: 'Payment Period', 
            macro: '#occyear', 
            type: 'combo', 
            choices: paymentPeriod
        },
        { 
            required: false,
            info: '<p>The 10th percentile value. For example, 10% of the salaries for this occupation are at or below this value.</p>',
            property: 'percentile10 ', 
            placeholder: '10th percentile value (Not Currency Symbol)', 
            title: '10th percentile value', 
            macro: '#oc10per', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The 25th percentile value. For example, 25% of the salaries for this occupation are at or below this value.</p>',
            property: 'percentile25 ', 
            placeholder: '25th percentile value (Not Currency Symbol)', 
            title: '25th percentile value', 
            macro: '#oc25per', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The median (or "middle") value. For example, half of the salaries for this occupation are at or below this value.</p>',
            property: 'median ', 
            placeholder: 'Median value (Not Currency Symbol)', 
            title: 'Median value', 
            macro: '#occmedian', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The 75th percentile value. For example, 75% of the salaries for this occupation are at or below this value.</p>',
            property: 'percentile75 ', 
            placeholder: '75th percentile value (Not Currency Symbol)', 
            title: '75th percentile value', 
            macro: '#oc75per', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The 90th percentile value. For example, 90% of the salaries for this occupation are at or below this value.</p>',
            property: 'percentile90 ', 
            placeholder: '90th percentile value (Not Currency Symbol)', 
            title: '90th percentile value', 
            macro: '#oc90per', 
            type: 'string' 
        },
        { 
            required: false,
            info: '<p>The place for which this occupational description applies. Define the location at the city, state, or country level on the one Name field if specifying for a single location.</p><ul><li>The location should not be any more specific than the city.</li></ul>',
            property: 'occupationLocation ', 
            placeholder: '', 
            title: 'Job Location', 
            macro: '#occlocat', 
            type: 'combo', 
            choices: occLocation
        },
        { 
            required: false,
            info: '<p>City, State or Country Name</p>',
            property: 'occupationLocation ', 
            placeholder: '', 
            title: 'Location Name', 
            macro: '#cityname', 
            type: 'string'
        }
    ] },
     // Occupation [14]
     { title: 'Course', jsonld: CourseSchemaMarkup, schemaItems: [
        { 
            required: true,
            info: '<p>The title of the course.</p>',
            property: 'name ', 
            placeholder: 'Course Name', 
            title: 'Course Name:', 
            macro: '#coursename', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A description of the course. Display limit of 60 characters.</p>',
            property: 'description ', 
            placeholder: 'Course Description', 
            title: 'Course Description:', 
            macro: '#coursedescription', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The organization that publishes the source content of the course. For example, UC Berkeley.</p>',
            property: 'provider.name ', 
            placeholder: 'Course Provider', 
            title: 'Course Provider:', 
            macro: '#Orgname', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The organization url</p>',
            property: 'provider.url ', 
            placeholder: 'Course Provider URL', 
            title: 'Course Provider URL:', 
            macro: '#orgurl', 
            type: 'string' 
        }
    ] },
    // Claim [15]
    { title: 'Fact Check', jsonld: ClaimSchemaMarkup, schemaItems: [
       { 
           required: true,
           info: '<p>The date when the fact check was published</p>',
           property: 'datePublished ', 
           placeholder: 'Claim Review Publish Date', 
           title: 'Claim Review Publish Date', 
           macro: '#claimreviewpublish', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>Link to the page hosting the full article of the fact check. <br />>The domain of this URL value must be the same domain as, or a subdomain of, the page hosting this <span class="codefont">ClaimReview</span> element. Redirects or shortened URLs (such as g.co/searchconsole) are not resolved, and so will not work here.</p>',
           property: 'url ', 
           placeholder: 'Claim Review page URL', 
           title: 'Claim Review page URL', 
           macro: '#claimURL', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>The author of the claim, not the author of the fact check. Don&#39;t include the author property if the claim doesn&#39;t have an author. If you add author, you must define the <span class="codefont">sameAs</span></p>',
           property: 'name', 
           placeholder: 'Claim Author Name', 
           title: 'Claim Author Name:', 
           macro: '#claimauthorname', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>URL, recommended</p><p>This field stores the URL of the publisher(s) and can be repeated as many times as needed (for example, when multiple publishers spread the claim). The publisher can be a person or organization. If the publisher is an organization, use one of the following URLs:</p><ul><li>The URL of the page that is hosting the claim (preferred).</li><li>The homepage of the organization that is making the claim.</li></ul><p>If the publisher is a person, use a definitive URL that provides information about the person who is making the claim, such as the person&#39;s Wikipedia page.</p>',
           property: 'sameAs', 
           placeholder: 'Claim author URL', 
           title: 'Claim author URL:', 
           macro: '#claimauthurl', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>The date when the claim was made or entered public discourse (for example, when it became popular in social networks).</p>',
           property: 'datePublished ', 
           placeholder: 'Claim Publish Date', 
           title: 'Claim Publish Date', 
           macro: '#claimpublish', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>A short summary of the claim being evaluated. Try to keep this less than 75 characters to minimize wrapping when displayed on a mobile device.</p>',
           property: 'claimReviewed ', 
           placeholder: 'Claim being reviewed', 
           title: 'Claim being reviewed', 
           macro: '#claimreved', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>The publisher of the fact check article, not the publisher of the claim. Must be an organization, not a person. Must have at least one of the following properties:</p>',
           property: 'author ', 
           placeholder: 'Claim Review Author', 
           title: 'Claim Review Author', 
           macro: '#claimrevauthorname', 
           type: 'string' 
       },
      
       { 
           required: true,
           info: '<p>A numeric rating of this claim, in the range worstRating — bestRating inclusive. Not shown, but used to evaluate the strength of this fact check across multiple pages. Integer values recommended but not required. The closer this number is to bestRating the more true it is; the closer this value is to worstRating, the more false it is. Must be able to be evaluated as a number.</p>',
           property: 'ratingValue', 
           placeholder: 'Rating Value', 
           title: 'Rating Value', 
           macro: '#revratingvalue', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>For numeric ratings, the best value possible in the scale from worst to best. Must be greater than worstRating. Must be able to be evaluated as a number.</p>',
           property: 'bestRating', 
           placeholder: 'Best Rating', 
           title: 'Best Rating', 
           macro: '#revbest', 
           type: 'string' 
       },
       { 
           required: true,
           info: '<p>For numeric ratings, the worst value possible in a scale from worst to best. Must be less than bestRating. Must be able to be evaluated as a number. Must have a minimum value of 1.</p>',
           property: 'worstRating', 
           placeholder: 'Worst Rating', 
           title: 'Worst Rating', 
           macro: '#revworst', 
           type: 'string' 
       }
   ] },
   
    // DataSet [16]
    { title: 'Dataset', jsonld: DataSetSchemaMarkup, schemaItems: [
        { 
            required: true,
            info: '<p>A descriptive name of a dataset. For example, &#34;Snow depth in Northern Hemisphere&#34;.</p>',
            property: 'name', 
            placeholder: 'Dataset Name', 
            title: 'Dataset Name', 
            macro: '#datasetname', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A short summary describing a dataset.</p>',
            property: 'description', 
            placeholder: 'Dataset DEscription', 
            title: 'Dataset DEscription', 
            macro: '#datadescript', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Location of a page describing the dataset.</p>',
            property: 'url', 
            placeholder: 'Dataset Page URL', 
            title: 'Dataset Page URL', 
            macro: '#datasetURL', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A link to a page that provides more information about the same dataset, usually in a different repository.</p>',
            property: 'sameAs', 
            placeholder: 'More Info Page URL', 
            title: 'More Info Page URL', 
            macro: '#datasameasURL', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Keywords summarizing the dataset. Each Keyword set wraped in &#34; and separated with a comma</p>',
            property: 'sameAs', 
            placeholder: '"keyword set 1", "keyword set 2"', 
            title: 'Keywords', 
            macro: '#datakeywords', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Dataset Creator URl</p>',
            property: 'creator.url', 
            placeholder: 'Dataset creator URL', 
            title: 'Dataset creator URL', 
            macro: '#creatorURL', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Dataset Creator URl</p>',
            property: 'creator.name', 
            placeholder: 'Dataset creator Name', 
            title: 'Dataset creator Name', 
            macro: '#creatorName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Dataset Creator URl</p>',
            property: 'creator.Contact Type', 
            placeholder: 'Dataset creator Contact Type', 
            title: 'Dataset creator Contact Type', 
            macro: '#contactType', 
            type: 'combo', 
            choices: contactPt 
        },
        { 
            required: true,
            info: '<p>Dataset Creator telephone. Must start with "+" and Country code</p>',
            property: 'creator.telephone', 
            placeholder: 'Dataset creator telephone', 
            title: 'Dataset creator telephone', 
            macro: '#contactPhone', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>Dataset Creator Email</p>',
            property: 'creator.email', 
            placeholder: 'Dataset creator Email Address', 
            title: 'Dataset creator Email Address', 
            macro: '#contactemail', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The catalog to which the dataset belongs.</p>',
            property: 'includedInDataCatalog.name', 
            placeholder: 'Catalog Name', 
            title: 'Catalog Name', 
            macro: '#datacatname', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The file format of the distribution.</p>',
            property: 'distribution.fileFormat', 
            placeholder: 'File Format', 
            title: 'File Format', 
            macro: '#encodeformat1', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The link for the download.</p>',
            property: 'distribution.contentUrl', 
            placeholder: 'Download URL', 
            title: 'Download URL', 
            macro: '#contenturl1', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>The data in the dataset covers a specific time interval. Only include this property if the dataset has a temporal dimension. Schema.org uses the ISO 8601 standard to describe time intervals and time points. You can describe dates differently depending upon the dataset interval. Indicate open-ended intervals with two decimal points (..).</p>',
            property: 'temporalCoverage', 
            placeholder: 'Temporal Coverage', 
            title: 'Temporal Coverage', 
            macro: '#temporalcover', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>You can provide a single point that describes the spatial aspect of the dataset. Only include this property if the dataset has a spatial dimension. For example, a single point where all the measurements were collected, or the coordinates of a bounding box for an area.</p>',
            property: 'spatialCoverage', 
            placeholder: 'GeoShap Box dimensions', 
            title: 'GeoShap Box dimensions', 
            macro: '#databox', 
            type: 'string'
        }   

    ] },

    
   
    // Critic Review [17]
    { title: 'Critic Review', jsonld: CriticRevSchemaMarkup, schemaItems: [
        
        { 
            required: true,
            info: '<p>Name of the author of the review. Provide the full name of the author. The value should be capitalized correctly. Names comprised of entirely uppercase or lowercase letters are edited such that the first letter of every word is capitalized.</p>',
            property: 'author.name', 
            placeholder: 'Critic Name', 
            title: 'Critic Name', 
            macro: '#claimauthorname', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>URL of a page that unambiguously identifies the author (for example, the author&#39;s official website, a profile page, a Wikipedia article).</p>',
            property: 'author.sameAs', 
            placeholder: 'Author Page URL', 
            title: 'Author Page URL', 
            macro: '#reviewauthurl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>A snippet from the body of the actual review that captures the author&#39;s opinion about the review subject. </p>',
            property: 'description', 
            placeholder: 'Description', 
            title: 'Review Descripton', 
            macro: '#revdescript', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>URL of the web page that contains the full text of the review.<br />The webpage indicated by this field must contain a full-length review that is longer than 300 words.</p>',
            property: 'URL', 
            placeholder: 'Review Page URL', 
            title: 'Review Page URL', 
            macro: '#reviewURL', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Name of the publisher of the review. For example, &#36;The New York Times&#36;.</p>',
            property: 'publisher.name', 
            placeholder: 'Publisher Name', 
            title: 'Publisher Name', 
            macro: '#reviewPubName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The URL of the publisher&#39;s official website or Wikipedia page.</p>',
            property: 'publisher.sameAs', 
            placeholder: 'Publisher URL', 
            title: 'Publisher Page URL', 
            macro: '#revpubsameas', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The BCP-47 language code of the review description (for example, "en" is English,  "ja" is Japanese).</p>',
            property: 'inLanguage', 
            placeholder: 'Language (en for English)', 
            title: 'Review Language', 
            macro: '#revlang', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Select the most specific LocalBusiness sub-type being reviewed</p>',
            property: '@type', 
            placeholder: 'Select Business Type being Reviewed', 
            title: 'Local Business @type:', 
            macro: '#selectedlbType', 
            type: 'combo', 
            choices: lbTypeValues 
        },
        {   
            required: true,
            info: '<p>Business name.</p>',
            property: 'name', 
            placeholder: 'Business name', 
            title: 'Business name:', 
            macro: '#lbBusiName', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>An image of the business.<ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li></ul></p>',
            property: 'image', 
            placeholder: 'URL for logo of business being reviewed', 
            title: 'Logo URL:', 
            macro: '#lblogoUrl', 
            type: 'string' 
        },
        /*{ 
            required: true,
            info: '<p>Globally unique ID of the specific business location in the form of a URL. The ID should be stable and unchanging over time. Google Search treats the URL as an opaque string and it does not have to be a working link. If the business has multiple locations, make sure the @id is unique for each location</p>',
            property: '@id', 
            placeholder: 'Website url with suffix /#organization', 
            title: '@id (URL):', 
            macro: '#lbsiteIDUrl', 
            type: 'string'
        },*/
        { 
            required: true,
            info: '<p>The fully-qualified URL of the specific business location.</p>',
            property: 'url', 
            placeholder: 'Site Homepage URL', 
            title:'Site Homepage URL:', 
            macro: '#lbsiteUrl', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The public phone number of the business that&#39;s normally used by customers, including the country code. The itemReviewed.telephone property is only recommended for reviews about a local business.</p>',
            property: 'itemReviewed.telephone', 
            placeholder: '+ Telephone number', 
            title: 'Telephone (incl. (+ Country code)):', 
            macro: '#lbTel', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Price Range</p>',
            property: 'itemReviewed.priceRange', 
            placeholder: '$$', 
            title: 'Price Range:', 
            macro: '#lbpricerange', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Address of the specific business location.</p>',
            property: 'address.streetAddress', 
            placeholder: 'Street number, street name, and unit number', 
            title: 'Street Address:', 
            macro: '#lbstAddress', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>City</p>',
            property: 'address.addressLocality', 
            placeholder: 'City', 
            title: 'City:', 
            macro: '#lbCity', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>State or province, if applicable.</p>',
            property: 'address.addressRegion', 
            placeholder: 'State / Province', 
            title: 'State/Province:', 
            macro: '#lbRegion', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Postal or zip code.</p>',
            property: 'address.postalCode', 
            placeholder: 'Postal or zip code.', 
            title: 'Zip/Post Code:',
            macro: '#lbZip', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Country Code</p>',
            property: 'address.addressCountry', 
            placeholder: '', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },      
        { 
            required: true,
            info: '<p>The rating given to the reviewed item. Letter grades are allowed. For example, "B+".</p>',
            property: 'reviewRating.ratingValue', 
            placeholder: 'Rating Value', 
            title: 'Rating Value', 
            macro: '#revratingvalue', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The highest value allowed in this rating system. This property is required if the rating system is not on a 5-point scale. If bestRating is omitted, 5 is assumed.</p>',
            property: 'reviewRating.bestRating', 
            placeholder: 'Best Rating', 
            title: 'Best Rating', 
            macro: '#revbest', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The lowest value allowed in this rating system. The worstRating property is required if the rating system is not on a 5-point scale. If worstRating is omitted, 1 is assumed.</p>',
            property: 'reviewRating.worstRating', 
            placeholder: 'Worst Rating', 
            title: 'Worst Rating', 
            macro: '#revworst', 
            type: 'string' 
        }  

    ] },
    // Employer Agg Rating [18]
    { title: 'Employer Aggregate Rating', jsonld: EmployAggSchemaMarkup, schemaItems: [
        {   
            required: true,
            info: '<p>Employer name.</p>',
            property: 'itemReviewed.name', 
            placeholder: 'Employer name', 
            title: 'Employer name:', 
            macro: '#lbBusiName', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>Employer Website URL.</p>',
            property: 'itemReviewed.sameAs', 
            placeholder: 'Employer Website URL', 
            title: 'Employer Website URL:', 
            macro: '#lbsiteUrl', 
            type: 'string' 
        },        
        { 
            required: true,
            info: '<p>A numerical quality rating for the organization. The numerical quality rating must be an aggregate score that is accurately derived from the provided ratings.</p>',
            property: 'ratingValue', 
            placeholder: 'Rating Value', 
            title: 'Rating Value', 
            macro: '#revratingvalue', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The highest value allowed in this rating system. This property is required if the rating system is not on a 5-point scale. If bestRating is omitted, 5 is assumed.</p>',
            property: 'reviewRating.bestRating', 
            placeholder: 'Best Rating', 
            title: 'Best Rating', 
            macro: '#revbest', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The lowest value allowed in this rating system. The worstRating property is required if the rating system is not on a 5-point scale. If worstRating is omitted, 1 is assumed.</p>',
            property: 'worstRating', 
            placeholder: 'Worst Rating', 
            title: 'Worst Rating', 
            macro: '#revworst', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The total number of ratings of the organization on your site.</p>',
            property: 'ratingCount', 
            placeholder: 'Number of ratings', 
            title: 'Number of ratings', 
            macro: '#revcount', 
            type: 'string' 
        }  

    ] },

     //Event [19]
     { title: 'Event', jsonld: EventSchemaMarkup, schemaItems: [
        {   
            required: true,
            info: '<p>Title of the event. For example:<br /><strong>Best practices:</strong><ul><li>Mention the full title of the event.</li><li>Highlight a unique aspect of the event in the title. This helps users make faster decisions (for example, "feat. Q&A with the artist").</li><li>Don&#39;t add short-term promotions (for example, "buy your tickets now").</li><li>Don&#39;t add prices in the title. Instead, use the <span class="codefont">price</span> property.</li></ul></p>',
            property: 'name', 
            placeholder: 'Event Name', 
            title: 'Event Name:', 
            macro: '#eventname', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The start date and start time of the event in the local timezone, with the "T" and the time in 24 hr format suffix. If start time is unknown, just use the date </p>',
            property: 'startDate', 
            placeholder: 'Event Start Date YYYYMMDDTHH', 
            title: 'Event Start Date:', 
            macro: '#eventstartdate', 
            type: 'string' 
        },        
        { 
            required: true,
            info: '<p>The Name of the event Location</p>',
            property: 'location', 
            placeholder: 'Location Name', 
            title: 'Location Name', 
            macro: '#eventlocationname', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Address of the specific business location.</p>',
            property: 'address.streetAddress', 
            placeholder: 'Street number, street name, and unit number', 
            title: 'Street Address:', 
            macro: '#lbstAddress', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>City</p>',
            property: 'address.addressLocality', 
            placeholder: 'City', 
            title: 'City:', 
            macro: '#lbCity', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>State or province, if applicable.</p>',
            property: 'address.addressRegion', 
            placeholder: 'State / Province', 
            title: 'State/Province:', 
            macro: '#lbRegion', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Postal or zip code.</p>',
            property: 'address.postalCode', 
            placeholder: 'Postal or zip code.', 
            title: 'Zip/Post Code:',
            macro: '#lbZip', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Country Code</p>',
            property: 'address.addressCountry', 
            placeholder: '', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },
        { 
            required: true, 
            title: 'Image 1 URL:',
            info: 'The URL to an image that is representative of the event',
            property: 'image',
            placeholder: 'Image URL',  
            macro: '#img1url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 2 URL:', 
            info: 'A 2nd (optional) image that is representative of the event.',
            property: '',
            placeholder: 'Image 2 URL',  
            macro: '#img2url', 
            type: 'string' 
        },
        { 
            required: true, 
            title: 'Image 3 URL:', 
            info: 'A 3rd (optional) image that is representative of the event.',
            property: '',
            placeholder: 'Image 3 URL',  
            macro: '#img3url', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Description of the event. Describe all details of the events to make it easier for users to understand and attend the event.<br />Note: Google only shows a snippet of the full description.</p>',
            property: 'description', 
            placeholder: 'Event description', 
            title: 'Event description', 
            macro: '#eventdescription', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The end date and start time of the event in the local timezone, with the "T" and the time in 24 hr format suffix. If end time is unknown, just use the date </p>',
            property: 'endDate', 
            placeholder: 'Event End Date YYYYMMDDTHH', 
            title: 'Event End Date:', 
            macro: '#eventendDate', 
            type: 'string' 
        },     
        { 
            required: true,
            info: '<p>The URL of a page providing the ability to buy tickets.<br />This URL must meet the following requirements:</p><ul><li>Direct to a landing page that clearly and predominantly provides the opportunity to buy a ticket offering admittance to that specific event to any user from the general public.</li><li>Be a link that a user could click on the web page that contains the event</li><li>Be followable by the Googlebot (not blocked by robots.txt).</li></ul>',
            property: 'offers.url', 
            placeholder: 'Ticket purchase URL', 
            title: 'Ticket purchase URL:', 
            macro: '#prdURL', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The currency used to describe the Event price, in three-letter <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 format</a>.</p>',
            property: 'offers.priceCurrency', 
            placeholder: 'Currency Symbol', 
            title: 'Price Currency:', 
            macro: '#prdPriceCurrency', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The lowest available price, including service charges and fees, of this type of ticket. For example:</p>',
            property: 'offers.price', 
            placeholder: 'Price (do no include currency symbol)', 
            title: 'Price (do not include currency symbol):', 
            macro: '#prdPrice', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The availability of tickets for this event,</p><ul><li><span class="codefont">InStock</span></li><li><span class="codefont">OutOfStock</span></li><li><span class="codefont">PreOrder</span></li></ul>',
            property: 'offers.availability', 
            placeholder: '', 
            title: 'Availability:', 
            macro: '#availability', 
            type: 'combo', 
            choices: prdAvailability 
        },
        { 
            required: true,
            info: '<p>The date and time when tickets go on sale (only required on date-restricted offers),</p>',
            property: 'offers.validFrom', 
            placeholder: 'Valid from Date (YYYY-MM-DD)', 
            title: 'Valid from Date: ', 
            macro: '#eventvalidfrom', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The performer&#39;s name</p>',
            property: 'performer.name', 
            placeholder: 'Performers Name', 
            title: 'Performers Name: ', 
            macro: '#eventperformer', 
            type: 'string' 
        }

    ] },
    
     //Job Posting [20]
     { title: 'Job Posting', jsonld: JobPostingSchemaMarkup, schemaItems: [
        {   
            required: true,
            info: '<p>The title of the job</p><ul><li>This field should be the title of the job only.</li><li>Provide concise, readable titles.</li></ul>',
            property: 'title', 
            placeholder: 'Job Title', 
            title: 'Job Title:', 
            macro: '#jobtitle', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The full description of the job in HTML format.</p><p>The description should be a complete representation of the job, including job responsibilities, qualifications, skills, working hours, education requirements, and experience requirements. The description can&#39;t be the same as the title.</p><ul><li>You must format the description in HTML.</li><li></li></ul>',
            property: 'description', 
            placeholder: 'Job description', 
            title: 'Job description:', 
            macro: '#jobdescription', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The hiring organization&#39;s unique identifier name for the job.</p>',
            property: 'identifier.name', 
            placeholder: 'Job identifier name', 
            title: 'Job identifier name:', 
            macro: '#jobidentname', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The hiring organization&#39;s unique identifier number for the job.</p>',
            property: 'identifier.value', 
            placeholder: 'Job identifier value', 
            title: 'Job identifier value:', 
            macro: '#jobidentvalue', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The original date that employer posted the job in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format</p>',
            property: 'datePosted', 
            placeholder: 'Job Posting Date YYYYMMDD', 
            title: 'Job Posting Date:', 
            macro: '#jobposteddate', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The date when the job posting will expire in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format</p><p>If a job posting never expires, or you do not know when the job will expire, do not include this property. If the job is filled before the expiration date occurs, remove the job posting.</p>',
            property: 'validThrough', 
            placeholder: 'Job Posting valid until Date YYYYMMDD', 
            title: 'Job Posting valid until:', 
            macro: '#jobvalidthru', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>Type of employment</p>',
            property: 'employmentType', 
            placeholder: 'Employment Type', 
            title: 'Employment Type:', 
            macro: '#employtype', 
            type: 'combo' ,
            choices: employType
        },
        {   
            required: true,
            info: '<p>The organization offering the job position. This should be the name of the company</p>',
            property: 'hiringOrganization.name', 
            placeholder: 'Hiring Organization Name', 
            title: 'Hiring Organization Name:', 
            macro: '#hiringname', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The website of the organization offering the job position.</p>',
            property: 'hiringOrganization.sameAs', 
            placeholder: 'Hiring Organization Website URL', 
            title: 'Hiring Organization Website URL:', 
            macro: '#hiringurl', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The Logo of the organization offering the job position.</p>',
            property: 'hiringOrganization.logo', 
            placeholder: 'Hiring Organization Logo URL', 
            title: 'Hiring Organization Logo URL:', 
            macro: '#hiringlogo', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The physical location(s) of the business where the employee will report to work</p>',
            property: 'address.streetAddress', 
            placeholder: 'Street number, street name, and unit number', 
            title: 'Street Address:', 
            macro: '#lbstAddress', 
            type: 'string'
        },
        { 
            required: true,
            info: '<p>City</p>',
            property: 'address.addressLocality', 
            placeholder: 'City', 
            title: 'City:', 
            macro: '#lbCity', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>State or province, if applicable.</p>',
            property: 'address.addressRegion', 
            placeholder: 'State / Province', 
            title: 'State/Province:', 
            macro: '#lbRegion', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Postal or zip code.</p>',
            property: 'address.postalCode', 
            placeholder: 'Postal or zip code.', 
            title: 'Zip/Post Code:',
            macro: '#lbZip', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>Country Code</p>',
            property: 'address.addressCountry', 
            placeholder: '', 
            title: 'Country:', 
            macro: '#selectedCountry', 
            type: 'country', 
            choices: countries 
        },
        { 
            required: true,
            info: '<p>The currency used to describe the Salary, in three-letter <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 format</a>.</p>',
            property: 'baseSalary.currency', 
            placeholder: 'Currency Symbol', 
            title: 'Salary Currency:', 
            macro: '#salarycurrency', 
            type: 'string' 
        },
        { 
            required: true,
            info: '<p>The value  used to describe the Salary</p>',
            property: 'baseSalary.value', 
            placeholder: 'Salary Value', 
            title: 'Salary Value:', 
            macro: '#salaryvalue', 
            type: 'string' 
        }
        ,
        { 
            required: true,
            info: '<p>The unit used to describe the Salary.</p>',
            property: 'baseSalary.unitText', 
            placeholder: 'Salary Unit', 
            title: 'Salary Unit:', 
            macro: '#salaryUnit', 
            type: 'combo', 
            choices: paymentPeriod
        }
    ] },
     //LiveStream [21]
     { title: 'Live Stream', jsonld: liveStremSchemaMarkup, schemaItems: [
        {   
            required: true,
            info: '<p>A URL pointing to the actual video media file.</p><p>You must provide a URL to your video. You can provide a URL by using one or both of the following properties: <span class="codefont">contentUrl</span> and <span class="codefont">embedUrl</span>.</p>',
            property: 'contentUrl', 
            placeholder: 'Video File url', 
            title: 'Video File url:', 
            macro: '#Videocontenturl', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The description of the video.</p>',
            property: 'description', 
            placeholder: 'Video Description', 
            title: 'Video Description:', 
            macro: '#VideoDescription', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The duration of the video in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 format</a>.</p>',
            property: 'duration', 
            placeholder: 'Video Duration 36M20S', 
            title: 'Video Duration:', 
            macro: '#vidDuration', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>A URL pointing to a player for the specific video. Usually this is the information in the src element of an <embed> tag.</p>',
            property: 'embedUrl', 
            placeholder: 'Video Embed URL', 
            title: 'Video Embed URL:', 
            macro: '#Videoembedurl', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>If applicable, the date after which the video will no longer be available, in ISO 8601 format. Don&#39;t supply this information if your video does not expire.</p>',
            property: 'expires', 
            placeholder: 'Video Expiry Date', 
            title: 'Video Expiry Date:', 
            macro: '#Videoexpire', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The title of the video.</p>',
            property: 'name', 
            placeholder: 'Video Title', 
            title: 'Video Title:', 
            macro: '#VideoName', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>A URL pointing to the video thumbnail image file.</p><ul><li>Every page must contain at least one image (whether or not you include markup). Google will pick the best image to display in Search results based on the aspect ratio and resolution.</li><li>Image URLs must be crawlable and indexable.</li><li>Images must represent the marked up content.</li><li>Images must be in .jpg, .png, or. gif format.</li><li>For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1.</li></ul>',
            property: 'thumbnailUrl', 
            placeholder: 'Image URL', 
            title: 'Video Image URL:', 
            macro: '#vidThumbnail1', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>The date the video was first published, in ISO 8601 format.</p>',
            property: 'uploadDate', 
            placeholder: 'Upload Date YYYY-MM-DD', 
            title: 'Upload Date:', 
            macro: '#datepub', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>Time and date of when the livestream starts or is expected to start, in ISO 8601 format. If <span class="codefont">startDate</span> is in the past or present, it indicates that the stream actually started. If <span class="codefont">startDate</span> is in the future, it indicates stream is scheduled to start at that time.</p>',
            property: 'startDate', 
            placeholder: 'Start Date YYYY-MM-DD', 
            title: 'Start Date:', 
            macro: '#livestreamstart', 
            type: 'string' 
        },
        {   
            required: true,
            info: '<p>Time and date of when the livestream ends or is expected to end, in ISO 8601 format.</p><p>It is required to provide the endDate once the video has finished and is no longer live. If the expected <span class="codefont">endDate</span> is unknown prior to the livestream starting, we recommend providing an approximate <span class="codefont">endDate</span>.</p><p>If <span class="codefont">endDate</span> is in the past or present, it indicates stream actually ended and is no longer live. If <span class="codefont">endDate</span> is in the future, it indicates stream is scheduled to end at that time.</p>',
            property: 'endDate', 
            placeholder: 'End Date YYYY-MM-DD', 
            title: 'End Date:', 
            macro: '#livestreamend', 
            type: 'string' 
        }
    ] },
];
