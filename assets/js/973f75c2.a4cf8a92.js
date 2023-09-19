"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6635],{98999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const s={sidebar_position:4},o="How to Create a Template",r={unversionedId:"tutorials/how-to-create-template",id:"tutorials/how-to-create-template",title:"How to Create a Template",description:"This tutorial explains how to create a Alibaba Cloud EC2 template and use it to create a service of ECS instance(s) on Alibaba Cloud.",source:"@site/docs/tutorials/how-to-create-template.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-create-template",permalink:"/docs/tutorials/how-to-create-template",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/tutorials/how-to-create-template.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Integration with CI/CD Tools",permalink:"/docs/tutorials/integrate-with-cicd"},next:{title:"Improvement Plan",permalink:"/docs/improvement-plan"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Create Template Files",id:"create-template-files",level:2},{value:"Commit and Tag Version",id:"commit-and-tag-version",level:2},{value:"Create a Template on Walrus",id:"create-a-template-on-walrus",level:2}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-a-template"},"How to Create a Template"),(0,i.kt)("p",null,"This tutorial explains how to create a Alibaba Cloud EC2 template and use it to create a service of ECS instance(s) on Alibaba Cloud."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A GitHub Repository for storing the template."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/deploy/standalone"},"Walrus installed"),".")),(0,i.kt)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new repository on GitHub of your own.\nHere we use the repository ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/walrus-catalog-demo/demo"},"demo")),(0,i.kt)("li",{parentName:"ol"},"Clone the repository to your local machine.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:walrus-catalog-demo/demo.git\n")),(0,i.kt)("h2",{id:"create-template-files"},"Create Template Files"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cloned repository directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd demo\n")),(0,i.kt)("p",null,"Create files in the directory as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"- demo\n  - main.tf\n  - outputs.tf\n  - variables.tf\n  - README.md\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"main.tf")," file defines the resources to be created. Here we define resource for the template to create an Alibaba Cloud ECS instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'resource "alicloud_instance" "example" {\n  instance_name        = "demo-instance"\n  instance_type        = var.instance_type\n  image_id             = var.image_id\n  system_disk_category = var.system_disk_category\n  system_disk_size     = var.system_disk_size\n  internet_charge_type = var.internet_charge_type\n  internet_max_bandwidth_out = var.internet_max_bandwidth_out\n\n  vswitch_id = data.alicloud_vswitches.default.vswitches.0.id\n\n  host_name = var.hostname\n  key_name = "seal-demo"\n\n  security_groups = [\n    data.alicloud_security_groups.default.groups.0.id\n  ]\n}\n\ndata "alicloud_vpcs" "default" {\n  name_regex = "default"\n}\n\ndata "alicloud_vswitches" "default" {\n  vpc_id = data.alicloud_vpcs.default.vpcs.0.id\n}\n\ndata "alicloud_security_groups" "default" {\n  name_regex = "default"\n}\n\nresource "null_resource" "health_check" {\n  depends_on = [\n    alicloud_instance.example,\n  ]\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"variables.tf")," file defines the variables used in the template. Walrus will use the variables to generate the form for users to fill in."),(0,i.kt)("p",null,"Walrus use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@label")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@group")," annotations to define the labels and groups of the variables. The optional ",(0,i.kt)("inlineCode",{parentName:"p"},"@options")," annotation is used to define the dropdown options of the variable\uff0c if the ",(0,i.kt)("inlineCode",{parentName:"p"},"@options")," annotation is not defined, the variable will be displayed as a text box in the form. More details about the annotations can be found ",(0,i.kt)("a",{parentName:"p",href:"/operation/template#variable-style-extension"},"here"),"."),(0,i.kt)("p",null,"In this example, we define two groups: ",(0,i.kt)("inlineCode",{parentName:"p"},"Basic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced"),". It will be displayed as two tabs in the form when creating a service using this template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# @label "Instance type"\n# @group "Basic"\nvariable "instance_type" {\n  description = "The instance type of the ECS instance"\n  default     = "ecs.s6-c1m2.small"\n}\n\n# @label "VM image id"\n# @group "Basic"\nvariable "image_id" {\n  description = "The ID of the image used to launch the ECS instance"\n  default     = "ubuntu_18_04_x64_20G_alibase_20230208.vhd"\n}\n\n# @label "System disk type"\n# @group "Basic"\n# @options ["ephemeral_ssd", "cloud_efficiency", "cloud_ssd", "cloud_essd", "cloud", "cloud_auto"]\nvariable "system_disk_category" {\n  description = "The category of the system disk"\n  default     = "cloud_efficiency"\n}\n\n# @label "System disk size"\n# @group "Basic"\nvariable "system_disk_size" {\n  description = "The size of the system disk, value range: [20, 500]"\n  default     = 40\n}\n\n# @label "Hostname"\n# @group "Basic"\nvariable "hostname" {\n  type        = string\n  description = "The hostname of the ECS instance"\n  default     = ""\n}\n\n# @label "Network billing type"\n# @group "Advanced"\n# @options ["PayByTraffic", "PayByBandwidth"]\nvariable "internet_charge_type" {\n  description = "The billing method of the public network bandwidth"\n  default     = "PayByTraffic"\n}\n\n# @label "Max outbound bandwidth (MB)"\n# @group "Advanced"\nvariable "internet_max_bandwidth_out" {\n  description = "The maximum outbound bandwidth of the public network"\n  default     = 5\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs.tf")," file defines the outputs of the template which will be displayed to the user after the service is created. The outputs of the template of a service could also be referenced by other services."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'output "public_ip" {\n  value = alicloud_instance.example.public_ip\n}\n\noutput "primary_ip_address" {\n  value = alicloud_instance.example.primary_ip_address\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file is the description of the template. It will be displayed to the user when creating a service using this template. Here we can use the tool ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/terraform-docs/terraform-docs"},"terraform-docs")," to generate the description of the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"terraform-docs markdown . > README.md\n")),(0,i.kt)("p",null,"The generated ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'## Requirements\n\nNo requirements.\n\n## Providers\n\n| Name | Version |\n|------|---------|\n| <a name="provider_alicloud"></a> [alicloud](#provider\\_alicloud) | n/a |\n| <a name="provider_null"></a> [null](#provider\\_null) | n/a |\n\n## Modules\n\nNo modules.\n\n## Resources\n\n| Name | Type |\n|------|------|\n| [alicloud_instance.example](https://registry.terraform.io/providers/hashicorp/alicloud/latest/docs/resources/instance) | resource |\n| [null_resource.health_check](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource) | resource |\n| [alicloud_security_groups.default](https://registry.terraform.io/providers/hashicorp/alicloud/latest/docs/data-sources/security_groups) | data source |\n| [alicloud_vpcs.default](https://registry.terraform.io/providers/hashicorp/alicloud/latest/docs/data-sources/vpcs) | data source |\n| [alicloud_vswitches.default](https://registry.terraform.io/providers/hashicorp/alicloud/latest/docs/data-sources/vswitches) | data source |\n\n## Inputs\n\n| Name | Description | Type | Default | Required |\n|------|-------------|------|---------|:--------:|\n| <a name="input_hostname"></a> [hostname](#input\\_hostname) | The hostname of the ECS instance | `string` | `""` | no |\n| <a name="input_image_id"></a> [image\\_id](#input\\_image\\_id) | The ID of the image used to launch the ECS instance | `string` | `"ubuntu_18_04_x64_20G_alibase_20230208.vhd"` | no |\n| <a name="input_instance_type"></a> [instance\\_type](#input\\_instance\\_type) | The instance type of the ECS instance | `string` | `"ecs.s6-c1m2.small"` | no |\n| <a name="input_internet_charge_type"></a> [internet\\_charge\\_type](#input\\_internet\\_charge\\_type) | The billing method of the public network bandwidth | `string` | `"PayByTraffic"` | no |\n| <a name="input_internet_max_bandwidth_out"></a> [internet\\_max\\_bandwidth\\_out](#input\\_internet\\_max\\_bandwidth\\_out) | The maximum outbound bandwidth of the public network | `number` | `5` | no |\n| <a name="input_system_disk_category"></a> [system\\_disk\\_category](#input\\_system\\_disk\\_category) | The category of the system disk | `string` | `"cloud_efficiency"` | no |\n| <a name="input_system_disk_size"></a> [system\\_disk\\_size](#input\\_system\\_disk\\_size) | The size of the system disk, value range: [20, 500] | `number` | `40` | no |\n\n## Outputs\n\n| Name | Description |\n|------|-------------|\n| <a name="output_primary_ip_address"></a> [primary\\_ip\\_address](#output\\_primary\\_ip\\_address) | n/a |\n| <a name="output_public_ip"></a> [public\\_ip](#output\\_public\\_ip) | n/a |\n')),(0,i.kt)("h2",{id:"commit-and-tag-version"},"Commit and Tag Version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "add template files"\ngit push -u origin main\n')),(0,i.kt)("p",null,"Create a tag for the template version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git tag v0.0.1\ngit push --tags\n")),(0,i.kt)("h2",{id:"create-a-template-on-walrus"},"Create a Template on Walrus"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Walrus in your browser and log in."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Template")," tab under ",(0,i.kt)("inlineCode",{parentName:"li"},"Operations Hub")," and create a template by using the template we just created, here we name the template ",(0,i.kt)("inlineCode",{parentName:"li"},"aliyun-ec2"),".\n",(0,i.kt)("img",{alt:"create-template",src:a(93537).Z,width:"2528",height:"1382"}),"\nAfter the import task is completed, the template will be displayed in the template list, we can see the template version is ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.0.1"),".\n",(0,i.kt)("img",{alt:"template-version",src:a(24730).Z,width:"5108",height:"2518"})),(0,i.kt)("li",{parentName:"ol"},"Add Alibaba Cloud Provider in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connectors")," tab under ",(0,i.kt)("inlineCode",{parentName:"li"},"Operations Hub"),"."),(0,i.kt)("li",{parentName:"ol"},"Add Connector to the Environment."),(0,i.kt)("li",{parentName:"ol"},"Create a Service using the template ",(0,i.kt)("inlineCode",{parentName:"li"},"aliyun-ec2"),", the form group and labels are generated according to the annotations in the template variables we defined.\n",(0,i.kt)("img",{alt:"create-service",src:a(25498).Z,width:"5120",height:"2132"}))),(0,i.kt)("p",null,"After the service is created, we can see the details of the service and the outputs of the template.\n",(0,i.kt)("img",{alt:"service-detail",src:a(10710).Z,width:"5120",height:"2530"}),"\nCheck the ECS instance on Alibaba Cloud console, we can see the ECS instance is created successfully.\n",(0,i.kt)("img",{alt:"ecs-instance",src:a(69050).Z,width:"4676",height:"658"})))}c.isMDXComponent=!0},25498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-service-us-cf5942e204a884dd6e3644056ce8f498.png"},93537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-template-us-74d56a7f2455f6e0ae0fc27e8bd451b8.png"},69050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ec2-us-1b37c94cc36cb1dcf82910905e4f50f6.png"},10710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/service-us-8ef055ae270d92ba8b4fcd83df830608.png"},24730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-version-us-069b34af1318defea0a9aae9ba50fb17.png"}}]);