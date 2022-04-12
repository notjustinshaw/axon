sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"}],"modules":[{"group":"","id":"Axon","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"layers-special","name":"Layers: Special","nodes":[{"anchor":"constant/2","id":"constant/2"},{"anchor":"input/2","id":"input/2"},{"anchor":"layer/6","id":"layer/6"},{"anchor":"nx/3","id":"nx/3"}]},{"key":"layers-activation","name":"Layers: Activation","nodes":[{"anchor":"activation/3","id":"activation/3"},{"anchor":"celu/2","id":"celu/2"},{"anchor":"elu/2","id":"elu/2"},{"anchor":"exp/2","id":"exp/2"},{"anchor":"gelu/2","id":"gelu/2"},{"anchor":"hard_sigmoid/2","id":"hard_sigmoid/2"},{"anchor":"hard_silu/2","id":"hard_silu/2"},{"anchor":"hard_tanh/2","id":"hard_tanh/2"},{"anchor":"leaky_relu/2","id":"leaky_relu/2"},{"anchor":"linear/2","id":"linear/2"},{"anchor":"log_sigmoid/2","id":"log_sigmoid/2"},{"anchor":"log_softmax/2","id":"log_softmax/2"},{"anchor":"mish/2","id":"mish/2"},{"anchor":"relu6/2","id":"relu6/2"},{"anchor":"relu/2","id":"relu/2"},{"anchor":"selu/2","id":"selu/2"},{"anchor":"sigmoid/2","id":"sigmoid/2"},{"anchor":"silu/2","id":"silu/2"},{"anchor":"softmax/2","id":"softmax/2"},{"anchor":"softplus/2","id":"softplus/2"},{"anchor":"softsign/2","id":"softsign/2"},{"anchor":"tanh/2","id":"tanh/2"}]},{"key":"layers-linear","name":"Layers: Linear","nodes":[{"anchor":"bilinear/4","id":"bilinear/4"},{"anchor":"dense/3","id":"dense/3"},{"anchor":"embedding/4","id":"embedding/4"}]},{"key":"layers-convolution","name":"Layers: Convolution","nodes":[{"anchor":"conv/3","id":"conv/3"},{"anchor":"conv_transpose/3","id":"conv_transpose/3"},{"anchor":"depthwise_conv/3","id":"depthwise_conv/3"},{"anchor":"separable_conv2d/3","id":"separable_conv2d/3"},{"anchor":"separable_conv3d/3","id":"separable_conv3d/3"}]},{"key":"layers-dropout","name":"Layers: Dropout","nodes":[{"anchor":"alpha_dropout/2","id":"alpha_dropout/2"},{"anchor":"dropout/2","id":"dropout/2"},{"anchor":"feature_alpha_dropout/2","id":"feature_alpha_dropout/2"},{"anchor":"spatial_dropout/2","id":"spatial_dropout/2"}]},{"key":"layers-pooling","name":"Layers: Pooling","nodes":[{"anchor":"adaptive_avg_pool/2","id":"adaptive_avg_pool/2"},{"anchor":"adaptive_lp_pool/2","id":"adaptive_lp_pool/2"},{"anchor":"adaptive_max_pool/2","id":"adaptive_max_pool/2"},{"anchor":"avg_pool/2","id":"avg_pool/2"},{"anchor":"global_avg_pool/2","id":"global_avg_pool/2"},{"anchor":"global_lp_pool/2","id":"global_lp_pool/2"},{"anchor":"global_max_pool/2","id":"global_max_pool/2"},{"anchor":"lp_pool/2","id":"lp_pool/2"},{"anchor":"max_pool/2","id":"max_pool/2"}]},{"key":"layers-normalization","name":"Layers: Normalization","nodes":[{"anchor":"batch_norm/2","id":"batch_norm/2"},{"anchor":"group_norm/3","id":"group_norm/3"},{"anchor":"instance_norm/2","id":"instance_norm/2"},{"anchor":"layer_norm/2","id":"layer_norm/2"}]},{"key":"layers-recurrent","name":"Layers: Recurrent","nodes":[{"anchor":"conv_lstm/3","id":"conv_lstm/3"},{"anchor":"gru/3","id":"gru/3"},{"anchor":"lstm/3","id":"lstm/3"}]},{"key":"layers-composition","name":"Layers: Composition","nodes":[{"anchor":"add/3","id":"add/3"},{"anchor":"concatenate/3","id":"concatenate/3"},{"anchor":"multiply/3","id":"multiply/3"},{"anchor":"subtract/3","id":"subtract/3"}]},{"key":"layers-shape","name":"Layers: Shape","nodes":[{"anchor":"flatten/2","id":"flatten/2"},{"anchor":"pad/4","id":"pad/4"},{"anchor":"reshape/3","id":"reshape/3"},{"anchor":"resize/3","id":"resize/3"},{"anchor":"transpose/3","id":"transpose/3"}]},{"key":"model-compilation","name":"Model: Compilation","nodes":[{"anchor":"compile/2","id":"compile/2"}]},{"key":"model-execution","name":"Model: Execution","nodes":[{"anchor":"init/2","id":"init/2"},{"anchor":"predict/4","id":"predict/4"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"attach_hook/3","id":"attach_hook/3"},{"anchor":"cond/5","id":"cond/5"},{"anchor":"deserialize/2","id":"deserialize/2"},{"anchor":"freeze/2","id":"freeze/2"},{"anchor":"get_model_signature/1","id":"get_model_signature/1"},{"anchor":"param/3","id":"param/3"},{"anchor":"serialize/3","id":"serialize/3"},{"anchor":"split/3","id":"split/3"},{"anchor":"tree_map/2","id":"tree_map/2"},{"anchor":"tree_reduce/3","id":"tree_reduce/3"}]}],"sections":[],"title":"Axon"},{"group":"","id":"Axon.Activations","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"celu/2","id":"celu/2"},{"anchor":"elu/2","id":"elu/2"},{"anchor":"exp/1","id":"exp/1"},{"anchor":"gelu/1","id":"gelu/1"},{"anchor":"hard_sigmoid/2","id":"hard_sigmoid/2"},{"anchor":"hard_silu/1","id":"hard_silu/1"},{"anchor":"hard_tanh/1","id":"hard_tanh/1"},{"anchor":"leaky_relu/2","id":"leaky_relu/2"},{"anchor":"linear/1","id":"linear/1"},{"anchor":"log_sigmoid/1","id":"log_sigmoid/1"},{"anchor":"log_softmax/2","id":"log_softmax/2"},{"anchor":"mish/1","id":"mish/1"},{"anchor":"relu6/1","id":"relu6/1"},{"anchor":"relu/1","id":"relu/1"},{"anchor":"selu/2","id":"selu/2"},{"anchor":"sigmoid/1","id":"sigmoid/1"},{"anchor":"silu/1","id":"silu/1"},{"anchor":"softmax/2","id":"softmax/2"},{"anchor":"softplus/1","id":"softplus/1"},{"anchor":"softsign/1","id":"softsign/1"},{"anchor":"tanh/1","id":"tanh/1"}]}],"sections":[],"title":"Axon.Activations"},{"group":"","id":"Axon.Initializers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"full/2","id":"full/2"},{"anchor":"glorot_normal/1","id":"glorot_normal/1"},{"anchor":"glorot_uniform/1","id":"glorot_uniform/1"},{"anchor":"he_normal/1","id":"he_normal/1"},{"anchor":"he_uniform/1","id":"he_uniform/1"},{"anchor":"identity/1","id":"identity/1"},{"anchor":"lecun_normal/1","id":"lecun_normal/1"},{"anchor":"lecun_uniform/1","id":"lecun_uniform/1"},{"anchor":"normal/1","id":"normal/1"},{"anchor":"ones/1","id":"ones/1"},{"anchor":"orthogonal/1","id":"orthogonal/1"},{"anchor":"uniform/1","id":"uniform/1"},{"anchor":"variance_scaling/1","id":"variance_scaling/1"},{"anchor":"zeros/1","id":"zeros/1"}]}],"sections":[],"title":"Axon.Initializers"},{"group":"","id":"Axon.Layers","nodeGroups":[{"key":"layers-linear","name":"Layers: Linear","nodes":[{"anchor":"bilinear/4","id":"bilinear/4"},{"anchor":"dense/3","id":"dense/3"}]},{"key":"layers-dropout","name":"Layers: Dropout","nodes":[{"anchor":"alpha_dropout/2","id":"alpha_dropout/2"},{"anchor":"dropout/2","id":"dropout/2"},{"anchor":"feature_alpha_dropout/2","id":"feature_alpha_dropout/2"},{"anchor":"spatial_dropout/2","id":"spatial_dropout/2"}]},{"key":"layers-pooling","name":"Layers: Pooling","nodes":[{"anchor":"adaptive_avg_pool/2","id":"adaptive_avg_pool/2"},{"anchor":"adaptive_lp_pool/2","id":"adaptive_lp_pool/2"},{"anchor":"adaptive_max_pool/2","id":"adaptive_max_pool/2"},{"anchor":"avg_pool/2","id":"avg_pool/2"},{"anchor":"lp_pool/2","id":"lp_pool/2"},{"anchor":"max_pool/2","id":"max_pool/2"}]},{"key":"layers-normalization","name":"Layers: Normalization","nodes":[{"anchor":"batch_norm/6","id":"batch_norm/6"},{"anchor":"group_norm/4","id":"group_norm/4"},{"anchor":"instance_norm/6","id":"instance_norm/6"},{"anchor":"layer_norm/4","id":"layer_norm/4"}]},{"key":"functions-convolutional","name":"Functions: Convolutional","nodes":[{"anchor":"conv/4","id":"conv/4"},{"anchor":"conv_transpose/4","id":"conv_transpose/4"},{"anchor":"depthwise_conv/4","id":"depthwise_conv/4"},{"anchor":"separable_conv2d/6","id":"separable_conv2d/6"},{"anchor":"separable_conv3d/8","id":"separable_conv3d/8"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"embedding/2","id":"embedding/2"},{"anchor":"flatten/1","id":"flatten/1"},{"anchor":"global_avg_pool/2","id":"global_avg_pool/2"},{"anchor":"global_lp_pool/2","id":"global_lp_pool/2"},{"anchor":"global_max_pool/2","id":"global_max_pool/2"},{"anchor":"resize/2","id":"resize/2"}]}],"sections":[],"title":"Axon.Layers"},{"group":"","id":"Axon.Loop","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"checkpoint/2","id":"checkpoint/2"},{"anchor":"deserialize_state/2","id":"deserialize_state/2"},{"anchor":"early_stop/3","id":"early_stop/3"},{"anchor":"eval_step/2","id":"eval_step/2"},{"anchor":"evaluator/2","id":"evaluator/2"},{"anchor":"from_state/2","id":"from_state/2"},{"anchor":"handle/4","id":"handle/4"},{"anchor":"log/5","id":"log/5"},{"anchor":"loop/3","id":"loop/3"},{"anchor":"metric/5","id":"metric/5"},{"anchor":"run/3","id":"run/3"},{"anchor":"serialize_state/2","id":"serialize_state/2"},{"anchor":"train_step/3","id":"train_step/3"},{"anchor":"trainer/4","id":"trainer/4"},{"anchor":"validate/3","id":"validate/3"}]}],"sections":[{"anchor":"module-initialize-and-step","id":"Initialize and Step"},{"anchor":"module-metrics","id":"Metrics"},{"anchor":"module-events-and-handlers","id":"Events and Handlers"},{"anchor":"module-factories","id":"Factories"},{"anchor":"module-running-loops","id":"Running loops"},{"anchor":"module-resuming-loops","id":"Resuming loops"}],"title":"Axon.Loop"},{"group":"","id":"Axon.Loop.State","sections":[],"title":"Axon.Loop.State"},{"group":"","id":"Axon.Losses","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"binary_cross_entropy/3","id":"binary_cross_entropy/3"},{"anchor":"categorical_cross_entropy/3","id":"categorical_cross_entropy/3"},{"anchor":"categorical_hinge/3","id":"categorical_hinge/3"},{"anchor":"connectionist_temporal_classification/3","id":"connectionist_temporal_classification/3"},{"anchor":"get_limits/3","id":"get_limits/3"},{"anchor":"get_path_prob/4","id":"get_path_prob/4"},{"anchor":"get_prob/5","id":"get_prob/5"},{"anchor":"hinge/3","id":"hinge/3"},{"anchor":"iterate_tree/4","id":"iterate_tree/4"},{"anchor":"kl_divergence/3","id":"kl_divergence/3"},{"anchor":"log_cosh/3","id":"log_cosh/3"},{"anchor":"margin_ranking/3","id":"margin_ranking/3"},{"anchor":"mean_absolute_error/3","id":"mean_absolute_error/3"},{"anchor":"mean_squared_error/3","id":"mean_squared_error/3"},{"anchor":"poisson/3","id":"poisson/3"},{"anchor":"soft_margin/3","id":"soft_margin/3"}]}],"sections":[],"title":"Axon.Losses"},{"group":"","id":"Axon.Metrics","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"accuracy/2","id":"accuracy/2"},{"anchor":"false_negatives/3","id":"false_negatives/3"},{"anchor":"false_positives/3","id":"false_positives/3"},{"anchor":"mean_absolute_error/2","id":"mean_absolute_error/2"},{"anchor":"precision/3","id":"precision/3"},{"anchor":"recall/3","id":"recall/3"},{"anchor":"running_average/1","id":"running_average/1"},{"anchor":"running_sum/1","id":"running_sum/1"},{"anchor":"sensitivity/3","id":"sensitivity/3"},{"anchor":"specificity/3","id":"specificity/3"},{"anchor":"true_negatives/3","id":"true_negatives/3"},{"anchor":"true_positives/3","id":"true_positives/3"}]}],"sections":[],"title":"Axon.Metrics"},{"group":"","id":"Axon.MixedPrecision","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create_policy/1","id":"create_policy/1"}]}],"sections":[],"title":"Axon.MixedPrecision"},{"group":"","id":"Axon.Optimizers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"adabelief/2","id":"adabelief/2"},{"anchor":"adagrad/2","id":"adagrad/2"},{"anchor":"adam/2","id":"adam/2"},{"anchor":"adamw/2","id":"adamw/2"},{"anchor":"fromage/2","id":"fromage/2"},{"anchor":"lamb/2","id":"lamb/2"},{"anchor":"noisy_sgd/2","id":"noisy_sgd/2"},{"anchor":"radam/2","id":"radam/2"},{"anchor":"rmsprop/2","id":"rmsprop/2"},{"anchor":"sgd/2","id":"sgd/2"},{"anchor":"yogi/2","id":"yogi/2"}]}],"sections":[{"anchor":"module-example","id":"Example"}],"title":"Axon.Optimizers"},{"group":"","id":"Axon.Recurrent","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"conv_lstm_cell/6","id":"conv_lstm_cell/6"},{"anchor":"dynamic_unroll/6","id":"dynamic_unroll/6"},{"anchor":"gru_cell/7","id":"gru_cell/7"},{"anchor":"lstm_cell/7","id":"lstm_cell/7"},{"anchor":"static_unroll/6","id":"static_unroll/6"}]}],"sections":[],"title":"Axon.Recurrent"},{"group":"","id":"Axon.Schedules","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"constant/1","id":"constant/1"},{"anchor":"cosine_decay/1","id":"cosine_decay/1"},{"anchor":"exponential_decay/1","id":"exponential_decay/1"},{"anchor":"polynomial_decay/1","id":"polynomial_decay/1"}]}],"sections":[],"title":"Axon.Schedules"},{"group":"","id":"Axon.Updates","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_decayed_weights/2","id":"add_decayed_weights/2"},{"anchor":"add_noise/2","id":"add_noise/2"},{"anchor":"apply_updates/3","id":"apply_updates/3"},{"anchor":"centralize/1","id":"centralize/1"},{"anchor":"clip/2","id":"clip/2"},{"anchor":"clip_by_global_norm/2","id":"clip_by_global_norm/2"},{"anchor":"compose/2","id":"compose/2"},{"anchor":"identity/0","id":"identity/0"},{"anchor":"identity/1","id":"identity/1"},{"anchor":"scale/2","id":"scale/2"},{"anchor":"scale_by_adam/2","id":"scale_by_adam/2"},{"anchor":"scale_by_belief/2","id":"scale_by_belief/2"},{"anchor":"scale_by_radam/2","id":"scale_by_radam/2"},{"anchor":"scale_by_rms/2","id":"scale_by_rms/2"},{"anchor":"scale_by_rss/2","id":"scale_by_rss/2"},{"anchor":"scale_by_schedule/2","id":"scale_by_schedule/2"},{"anchor":"scale_by_stddev/2","id":"scale_by_stddev/2"},{"anchor":"scale_by_trust_ratio/2","id":"scale_by_trust_ratio/2"},{"anchor":"scale_by_yogi/2","id":"scale_by_yogi/2"},{"anchor":"stateful/3","id":"stateful/3"},{"anchor":"stateless/2","id":"stateless/2"},{"anchor":"trace/2","id":"trace/2"}]}],"sections":[{"anchor":"module-custom-combinators","id":"Custom combinators"}],"title":"Axon.Updates"},{"group":"Exceptions","id":"Axon.CompilerError","sections":[],"title":"Axon.CompilerError"}],"tasks":[]}