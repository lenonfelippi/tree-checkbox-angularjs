import template from '../../view/treeCheckbox.html';

angular.module("app.directives", []).directive('treeCheckbox', function() {
	return {
		template: template,
		replace: true,
		restrict: 'E',
		scope: {
			items: '='
		},
		controller: ['$scope', function($scope) {

			$scope.handleToggleCheckbox = function(item) {
				item.checked = !item.checked;

				if (item.children.length > 0) {
					cascadeCheck(item, item.checked);
				} 

				verifyParent();
			};

			$scope.toggleIsOpen = function(item) {
				item.isOpen = !item.isOpen;
			}

			$scope.haveCheckedChildren = function(children) {
				for (const item of children) {
					if (item.checked) return true;

					if (item.children.length > 0) {
						if ($scope.haveCheckedChildren(item.children)) return true;
					}
				}
				return false;
			}

			// marcar ou desmarcar todos os filhos
			function cascadeCheck(item, isChecked) {
				item.checked = isChecked;

				item.children.forEach(function(child) {
					cascadeCheck(child, isChecked);
				});
			}

			// verifica se todos os filhos estão marcados
			function areAllChildrenChecked(item) {
				return item.children.every(function(child) {
					return child.checked;
				});
			}
		
			// verifica se todos os filhos do pai estão marcados, se sim, marca o pai
			function verifyParent() {
				var parent = $scope.$parent.item;
				if (parent) {
					parent.checked = areAllChildrenChecked(parent);
				}
			}
		}]
	};
});
